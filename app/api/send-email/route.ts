import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const RESTAURANT_EMAIL = 'dorking@rialtolounge.co.uk';
const FROM_EMAIL = 'reservations@rialtosocial.co.uk'; // Verify rialtosocial.co.uk domain in Resend

interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  service: string;
  message?: string;
}

function getServiceLabel(service: string): string {
  const services: Record<string, string> = {
    dining: 'Restaurant Dining',
    karaoke: 'Karaoke',
    darts: 'Darts',
    ps5: 'PS5 Gaming',
    event: 'Private Event',
  };
  return services[service] || service;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatTime(timeStr: string): string {
  const [hours, minutes] = timeStr.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
}

export async function POST(request: Request) {
  try {
    const body: ReservationData = await request.json();
    const { name, email, phone, date, time, guests, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !guests || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to restaurant
    const restaurantEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #ed7700, #005eb8); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .header h1 { color: white; margin: 0; font-size: 24px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .detail-row { display: flex; padding: 12px 0; border-bottom: 1px solid #eee; }
    .detail-label { font-weight: 600; color: #666; width: 140px; }
    .detail-value { color: #333; }
    .service-badge { display: inline-block; background: #ed7700; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px; }
    .message-box { background: white; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #ed7700; }
    .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🍽️ New Reservation Request</h1>
    </div>
    <div class="content">
      <div class="detail-row">
        <span class="detail-label">Service:</span>
        <span class="detail-value"><span class="service-badge">${getServiceLabel(service)}</span></span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Name:</span>
        <span class="detail-value"><strong>${name}</strong></span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Email:</span>
        <span class="detail-value"><a href="mailto:${email}">${email}</a></span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Phone:</span>
        <span class="detail-value"><a href="tel:${phone}">${phone}</a></span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Date:</span>
        <span class="detail-value"><strong>${formatDate(date)}</strong></span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Time:</span>
        <span class="detail-value"><strong>${formatTime(time)}</strong></span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Guests:</span>
        <span class="detail-value"><strong>${guests}</strong></span>
      </div>
      ${message ? `
      <div class="message-box">
        <strong>Special Requests:</strong>
        <p style="margin: 10px 0 0 0;">${message}</p>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      <p>This reservation request was submitted via rialtosocial.co.uk</p>
    </div>
  </div>
</body>
</html>
    `;

    // Confirmation email to customer
    const customerEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #ed7700, #005eb8); padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .header h1 { color: white; margin: 0 0 10px 0; font-size: 28px; }
    .header p { color: rgba(255,255,255,0.9); margin: 0; }
    .content { background: #f9f9f9; padding: 30px; }
    .booking-summary { background: white; padding: 25px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
    .booking-summary h2 { color: #ed7700; margin: 0 0 20px 0; font-size: 18px; }
    .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { color: #666; }
    .detail-value { font-weight: 600; color: #333; }
    .note { background: #fff3e0; padding: 15px; border-radius: 8px; border-left: 4px solid #ed7700; margin-top: 20px; }
    .contact-info { background: white; padding: 20px; border-radius: 10px; text-align: center; }
    .contact-info h3 { margin: 0 0 15px 0; color: #333; }
    .contact-info p { margin: 5px 0; color: #666; }
    .contact-info a { color: #ed7700; text-decoration: none; }
    .footer { text-align: center; padding: 30px; color: #888; font-size: 12px; border-radius: 0 0 10px 10px; background: #f0f0f0; }
    .social-links { margin-top: 15px; }
    .social-links a { display: inline-block; margin: 0 10px; color: #666; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You, ${name}! 🎉</h1>
      <p>Your reservation request has been received</p>
    </div>
    <div class="content">
      <div class="booking-summary">
        <h2>📋 Your Booking Details</h2>
        <div class="detail-row">
          <span class="detail-label">Service</span>
          <span class="detail-value">${getServiceLabel(service)}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Date</span>
          <span class="detail-value">${formatDate(date)}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Time</span>
          <span class="detail-value">${formatTime(time)}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Guests</span>
          <span class="detail-value">${guests}</span>
        </div>
      </div>
      
      <div class="note">
        <strong>⏰ What happens next?</strong>
        <p style="margin: 10px 0 0 0;">Our team will review your request and contact you shortly to confirm your reservation. Please note this is a request, not a confirmed booking.</p>
      </div>
      
      <div class="contact-info" style="margin-top: 20px;">
        <h3>Need to make changes?</h3>
        <p>📞 <a href="tel:+441306742885">01306 742885</a></p>
        <p>📧 <a href="mailto:dorking@rialtolounge.co.uk">dorking@rialtolounge.co.uk</a></p>
        <p>📍 45 Dene Street, Dorking, Surrey RH4 2DW</p>
      </div>
    </div>
    <div class="footer">
      <p><strong>Rialto Social</strong> - Authentic Italian Restaurant & Entertainment</p>
      <div class="social-links">
        <a href="https://www.facebook.com/caferialto.dorking">Facebook</a> |
        <a href="https://www.instagram.com/rialtolounge_dorking/">Instagram</a> |
        <a href="https://rialtosocial.co.uk">Website</a>
      </div>
      <p style="margin-top: 15px;">© ${new Date().getFullYear()} Rialto Social. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email to restaurant
    const { error: restaurantError } = await resend.emails.send({
      from: `Rialto Social Reservations <${FROM_EMAIL}>`,
      to: [RESTAURANT_EMAIL],
      subject: `🍽️ New ${getServiceLabel(service)} Reservation - ${name} (${formatDate(date)})`,
      html: restaurantEmailHtml,
      replyTo: email,
    });

    if (restaurantError) {
      console.error('Error sending restaurant email:', restaurantError);
      return NextResponse.json(
        { error: 'Failed to send reservation request' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const { error: customerError } = await resend.emails.send({
      from: `Rialto Social Reservations <${FROM_EMAIL}>`,
      to: [email],
      subject: `Your Reservation Request at Rialto Social - ${formatDate(date)}`,
      html: customerEmailHtml,
      replyTo: RESTAURANT_EMAIL,
    });

    if (customerError) {
      console.error('Error sending customer confirmation:', customerError);
      // Don't fail the request if customer email fails - main email was sent
    }

    return NextResponse.json(
      { success: true, message: 'Reservation request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

