import { useEffect, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [49.8, 15.5],
      zoom: 8,
      zoomControl: true,
    });

    mapInstanceRef.current = map;

    L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
      attribution:
        'Mapa &copy; <a href="https://opentopomap.org" target="_blank">OpenTopoMap</a> | &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
      maxZoom: 17,
      subdomains: ["a", "b", "c"],
    }).addTo(map);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <PageLayout title="Mapa" backPath="/">
      <div style={{ height: "calc(100vh - 70px)", width: "100%", position: "relative" }}>
        <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
      </div>
    </PageLayout>
  );
}
