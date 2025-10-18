# Map Setup Guide

## Map Implementation on the Contact Page

The website now uses **OpenStreetMap** with Leaflet - a completely free and open-source mapping solution that requires no API keys, credit cards, or complex setup!

### Why OpenStreetMap?

- **100% Free**: No API keys required
- **No Credit Card**: No billing setup needed
- **Privacy Friendly**: Doesn't track your users
- **Open Source**: Community-maintained maps
- **Reliable**: Used by major organizations worldwide

### The Map is Already Working!

The map on your contact page is already fully functional. It shows:
- Your restaurant location with a marker
- Interactive controls (zoom, pan)
- A popup with your address when clicking the marker
- A link to get directions

### Updating the Restaurant Location

If you need to update the exact coordinates for your restaurant:

1. Go to [OpenStreetMap](https://www.openstreetmap.org)
2. Search for your address: "45 Dene Street, Dorking, Surrey, RH4 2DW"
3. Right-click on the exact location
4. Select "Show address"
5. Look for the coordinates in the URL or page
6. Update the coordinates in `/components/sections/ContactSection.tsx`:

```tsx
<OpenStreetMap
  latitude={51.2321}  // Coordinates for 45 Dene Street, Dorking
  longitude={-0.3294} // Surrey, RH4 2DW
  zoom={17}           // Street-level zoom
  markerTitle="Rialto Social"
  className="rounded-lg overflow-hidden"
/>
```

### Customization Options

You can customize the map by editing the props:

- **zoom**: Higher numbers = more zoomed in (default: 16)
- **markerTitle**: The title shown in the popup
- **className**: CSS classes for styling

### No Maintenance Required

Unlike Google Maps, OpenStreetMap:
- Doesn't require API key management
- Has no usage limits or quotas
- Won't suddenly start charging
- Doesn't need billing alerts

Your map will continue working indefinitely without any intervention!
