"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface OpenStreetMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  markerTitle?: string;
  className?: string;
}

// Fix for Leaflet icon issue in Next.js
const FixedIcon = () => {
  useEffect(() => {
    (async () => {
      // @ts-expect-error - Leaflet global is not typed
      delete L.Icon.Default.prototype._getIconUrl;
      const L = (await import("leaflet")).default;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
      });
    })();
  }, []);
  return null;
};

function MapComponent({
  latitude,
  longitude,
  zoom = 16,
  markerTitle = "Rialto Social",
  className = "",
}: OpenStreetMapProps) {
  return (
    <div className={`${className} relative z-0`} style={{ height: "400px", minHeight: "400px", isolation: "isolate" }}>
      <FixedIcon />
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        style={{ height: "100%", width: "100%", position: "relative", zIndex: 0 }}
        className="rounded-lg [&_.leaflet-control]:!z-[1] [&_.leaflet-pane]:!z-[1] [&_.leaflet-top]:!z-[1] [&_.leaflet-bottom]:!z-[1]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold mb-2">{markerTitle}</h3>
              <p className="text-sm mb-2">
                45 Dene Street<br />
                Dorking, Surrey<br />
                RH4 2DW
              </p>
              <a
                href={`https://www.openstreetmap.org/directions?from=&to=${latitude},${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                Get Directions
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export function OpenStreetMap(props: OpenStreetMapProps) {
  return (
    <div className={props.className}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <MapComponent {...props} />
    </div>
  );
}
