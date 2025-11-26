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
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff;">
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #ed7700, #005eb8); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🍽️ New Reservation Request</h1>
      </td>
    </tr>
    <!-- Content -->
    <tr>
      <td style="padding: 30px;">
        <!-- SERVICE - HIGHLIGHTED -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px; background-color: #fff3e0; border-radius: 8px;">
          <tr>
            <td style="padding: 15px; text-align: center;">
              <span style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Service Requested</span>
              <h2 style="margin: 5px 0 0 0; color: #ed7700; font-size: 22px;">${getServiceLabel(service)}</h2>
            </td>
          </tr>
        </table>
        
        <!-- Booking Details Table -->
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666; width: 120px;">Name:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;"><strong>${name}</strong></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666;">Email:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #ed7700;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666;">Phone:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #ed7700;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666;">Date:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong>${formatDate(date)}</strong></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666;">Time:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong>${formatTime(time)}</strong></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #666;">Guests:</td>
            <td style="padding: 12px 0;"><strong>${guests}</strong></td>
          </tr>
        </table>
        
        ${message ? `
        <!-- Special Requests -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
          <tr>
            <td style="background: #f9f9f9; padding: 15px; border-left: 4px solid #ed7700; border-radius: 0 8px 8px 0;">
              <strong style="color: #333;">Special Requests:</strong>
              <p style="margin: 10px 0 0 0; color: #666;">${message}</p>
            </td>
          </tr>
        </table>
        ` : ''}
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="background-color: #f9f9f9; padding: 20px; text-align: center; color: #888; font-size: 12px;">
        <p style="margin: 0;">This reservation request was submitted via rialtosocial.co.uk</p>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Confirmation email to customer
    const customerEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff;">
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #ed7700, #005eb8); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0 0 10px 0; font-size: 28px;">Thank You, ${name}! 🎉</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 0;">Your reservation request has been received</p>
      </td>
    </tr>
    <!-- Content -->
    <tr>
      <td style="padding: 30px; background-color: #f9f9f9;">
        <!-- Booking Summary Box -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background: white; border-radius: 10px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 25px;">
              <h2 style="color: #ed7700; margin: 0 0 20px 0; font-size: 18px;">📋 Your Booking Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Service</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333; text-align: right;">${getServiceLabel(service)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Date</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333; text-align: right;">${formatDate(date)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Time</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333; text-align: right;">${formatTime(time)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666;">Guests</td>
                  <td style="padding: 10px 0; font-weight: 600; color: #333; text-align: right;">${guests}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <!-- What happens next -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
          <tr>
            <td style="background: #fff3e0; padding: 15px; border-left: 4px solid #ed7700; border-radius: 0 8px 8px 0;">
              <strong style="color: #333;">⏰ What happens next?</strong>
              <p style="margin: 10px 0 0 0; color: #666;">Our team will review your request and contact you shortly to confirm your reservation. Please note this is a request, not a confirmed booking.</p>
            </td>
          </tr>
        </table>
        
        <!-- Contact Info -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background: white; border-radius: 10px;">
          <tr>
            <td style="padding: 20px; text-align: center;">
              <h3 style="margin: 0 0 15px 0; color: #333;">Need to make changes?</h3>
              <p style="margin: 5px 0; color: #666;">📞 <a href="tel:+441306742885" style="color: #ed7700; text-decoration: none;">01306 742885</a></p>
              <p style="margin: 5px 0; color: #666;">📧 <a href="mailto:dorking@rialtolounge.co.uk" style="color: #ed7700; text-decoration: none;">dorking@rialtolounge.co.uk</a></p>
              <p style="margin: 5px 0; color: #666;">📍 45 Dene Street, Dorking, Surrey RH4 2DW</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="background-color: #f0f0f0; padding: 30px; text-align: center;">
        <p style="margin: 0 0 10px 0; color: #333;"><strong>Rialto Social</strong> - Authentic Italian Restaurant & Entertainment</p>
        <p style="margin: 0 0 15px 0;">
          <a href="https://www.facebook.com/caferialto.dorking" style="color: #666; text-decoration: none; margin: 0 10px;">Facebook</a> |
          <a href="https://www.instagram.com/rialtolounge_dorking/" style="color: #666; text-decoration: none; margin: 0 10px;">Instagram</a> |
          <a href="https://rialtosocial.co.uk" style="color: #666; text-decoration: none; margin: 0 10px;">Website</a>
        </p>
        <p style="margin: 0; color: #888; font-size: 12px;">© ${new Date().getFullYear()} Rialto Social. All rights reserved.</p>
      </td>
    </tr>
  </table>
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

