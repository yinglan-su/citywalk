"use client";

import React, { useEffect, useRef } from "react";
import { ActivityStop, DayItinerary } from "@/types/itinerary";

interface DailyMapProps {
  day: DayItinerary;
}

export const DailyMap: React.FC<DailyMapProps> = ({ day }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    // Dynamically import Leaflet on client side
    import("leaflet").then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      // Ensure leaflet styles are present
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // Cleanup existing map instance if any
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      const activities = day.timeline.filter(
        (t): t is ActivityStop => t.type === "activity" && Array.isArray(t.coordinates) && t.coordinates.length === 2
      );

      const center =
        day.mapConfig?.center && day.mapConfig.center.length === 2
          ? day.mapConfig.center
          : activities.length > 0
          ? activities[0].coordinates
          : [39.9042, 116.4074];

      const zoom = day.mapConfig?.zoom || 13;

      const map = L.map(mapContainerRef.current, {
        center: [center[0], center[1]],
        zoom: zoom,
        zoomControl: true,
        attributionControl: false,
      });

      mapInstanceRef.current = map;

      // AutoNavi (AMap) Tiles - high resolution & fast in China/globally
      L.tileLayer(
        "https://wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7",
        {
          maxZoom: 18,
          subdomains: ["1", "2", "3", "4"],
        }
      ).addTo(map);

      // Collect latLngs for polyline & bounding fit
      const latLngs: [number, number][] = [];

      activities.forEach((act, idx) => {
        const [lat, lng] = act.coordinates;
        latLngs.push([lat, lng]);

        const customIcon = L.divIcon({
          className: "custom-leaflet-marker",
          html: `
            <div style="
              width: 26px;
              height: 26px;
              background-color: #18181B;
              color: #ffffff;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 700;
              font-size: 12px;
              border: 2px solid #C5A880;
              box-shadow: 0 2px 6px rgba(0,0,0,0.35);
            ">${idx + 1}</div>
          `,
          iconSize: [26, 26],
          iconAnchor: [13, 13],
          popupAnchor: [0, -13],
        });

        const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
        marker.bindPopup(`
          <div style="font-family: inherit; font-size: 13px;">
            <strong style="color: #18181B;">${idx + 1}. ${act.name}</strong>
            <div style="color: #71717A; font-size: 11px; margin-top: 2px;">${act.timeSlot}</div>
            <div style="color: #18181B; font-size: 11px; margin-top: 4px; font-weight: 500;">落客: ${act.dropOffPoint}</div>
          </div>
        `);
      });

      // Draw polyline connecting stops
      if (latLngs.length > 1) {
        L.polyline(latLngs, {
          color: "#18181B",
          weight: 3.5,
          opacity: 0.85,
          dashArray: "5, 7",
        }).addTo(map);

        // Fit bounds smoothly with padding
        map.fitBounds(L.latLngBounds(latLngs), {
          padding: [30, 30],
          maxZoom: 15,
        });
      }

      // Invalidate map size after render to fix grey tile artifacts
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 300);
    });

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [day]);

  return (
    <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 z-10 my-4">
      <div ref={mapContainerRef} className="w-full h-full" />
      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-600 shadow-sm border border-slate-200 pointer-events-none z-[400]">
        Day {day.dayNumber} 路线地图 · 高德矢量底图
      </div>
    </div>
  );
};
