"use client";

import React, { useEffect, useRef, useState } from "react";
import { ActivityStop, DayItinerary } from "@/types/itinerary";
import { Navigation, Layers, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface DailyMapProps {
  day: DayItinerary;
}

export const DailyMap: React.FC<DailyMapProps> = ({ day }) => {
  const { locale, t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const tileLayerRef = useRef<any>(null);

  const activities = (day.timeline || []).filter(
    (t): t is ActivityStop =>
      t.type === "activity" && Array.isArray(t.coordinates) && t.coordinates.length === 2
  );

  const center =
    day.mapConfig?.center && day.mapConfig.center.length === 2
      ? day.mapConfig.center
      : activities.length > 0
      ? activities[0].coordinates
      : [39.9042, 116.4074];

  // Detect whether destination is in mainland China
  const isMainlandChina =
    center[0] >= 18.0 && center[0] <= 53.6 && center[1] >= 73.5 && center[1] <= 135.0;

  // Default tile mode based on geography and locale
  const [mapLayer, setMapLayer] = useState<"amap" | "global">(
    isMainlandChina ? "amap" : "global"
  );

  useEffect(() => {
    // Sync default layer if destination changes
    setMapLayer(isMainlandChina ? "amap" : "global");
  }, [isMainlandChina, day.dayNumber]);

  // Construct Google Maps full day directions URL
  const googleMapsRouteUrl = (() => {
    if (activities.length === 0) return null;
    if (activities.length === 1) {
      const [lat, lng] = activities[0].coordinates;
      return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    }
    const origin = activities[0].coordinates;
    const dest = activities[activities.length - 1].coordinates;
    const waypoints = activities
      .slice(1, -1)
      .map((a) => `${a.coordinates[0]},${a.coordinates[1]}`)
      .join("|");

    let url = `https://www.google.com/maps/dir/?api=1&origin=${origin[0]},${origin[1]}&destination=${dest[0]},${dest[1]}&travelmode=driving`;
    if (waypoints) {
      url += `&waypoints=${encodeURIComponent(waypoints)}`;
    }
    return url;
  })();

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

      const zoom = day.mapConfig?.zoom || 13;

      const map = L.map(mapContainerRef.current, {
        center: [center[0], center[1]],
        zoom: zoom,
        zoomControl: true,
        attributionControl: false,
      });

      mapInstanceRef.current = map;

      // Load chosen tile layer
      let tileUrl = "";
      let subdomains = ["1", "2", "3", "4"];

      if (mapLayer === "amap") {
        // AutoNavi (AMap) Tiles
        tileUrl =
          "https://wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7";
      } else {
        const cartoKey = process.env.NEXT_PUBLIC_CARTO_API_KEY;
        if (cartoKey) {
          tileUrl = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${cartoKey}`;
          subdomains = ["a", "b", "c", "d"];
        } else {
          // OpenStreetMap standard tiles (Global, 100% Free, No API key required)
          tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
          subdomains = ["a", "b", "c"];
        }
      }

      tileLayerRef.current = L.tileLayer(tileUrl, {
        maxZoom: 19,
        subdomains,
      }).addTo(map);

      // Collect latLngs for polyline & bounding fit
      const latLngs: [number, number][] = [];

      activities.forEach((act, idx) => {
        const [lat, lng] = act.coordinates;
        latLngs.push([lat, lng]);

        const customIcon = L.divIcon({
          className: "custom-leaflet-marker",
          html: `
            <div style="
              width: 28px;
              height: 28px;
              background-color: #18181B;
              color: #ffffff;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 700;
              font-size: 12px;
              border: 2px solid #C5A880;
              box-shadow: 0 2px 8px rgba(0,0,0,0.35);
            ">${idx + 1}</div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
          popupAnchor: [0, -14],
        });

        const gmapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

        marker.bindPopup(`
          <div style="font-family: inherit; font-size: 13px; padding: 2px; min-width: 170px;">
            <strong style="color: #18181B; font-size: 14px;">${idx + 1}. ${act.name}</strong>
            <div style="color: #71717A; font-size: 11px; margin-top: 3px;">⏰ ${act.timeSlot}</div>
            <div style="color: #18181B; font-size: 11px; margin-top: 3px; font-weight: 500;">📍 ${act.dropOffPoint}</div>
            <div style="margin-top: 8px; pt: 6px; border-top: 1px solid #E4E4E7;">
              <a href="${gmapsLink}" target="_blank" rel="noopener noreferrer" style="color: #2563EB; font-size: 11px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
                🗺️ ${locale === "zh" ? "在 Google 地图中导航 ↗" : "Open in Google Maps ↗"}
              </a>
            </div>
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
  }, [day, mapLayer, locale]);

  return (
    <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-stone-200 shadow-inner bg-stone-100 z-10 my-4">
      {/* Map Element */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Top Left: Google Maps Navigation Button */}
      {googleMapsRouteUrl && (
        <div className="absolute top-3 left-3 z-[400] flex items-center gap-2">
          <a
            href={googleMapsRouteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-white/95 hover:bg-white text-zinc-900 text-xs font-semibold shadow-md border border-stone-200/90 flex items-center gap-1.5 transition-transform active:scale-95 select-none"
            title="Open directions in Google Maps"
          >
            <Navigation className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            <span>{t("navFullDayGoogle")}</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </a>
        </div>
      )}

      {/* Top Right: Layer Switcher Pill */}
      <div className="absolute top-3 right-3 z-[400] flex items-center gap-1.5 bg-white/95 backdrop-blur-sm p-1 rounded-full text-[11px] font-medium text-zinc-700 shadow-md border border-stone-200/90">
        <button
          type="button"
          onClick={() => setMapLayer("amap")}
          className={`px-2.5 py-0.5 rounded-full transition-all ${
            mapLayer === "amap"
              ? "bg-zinc-900 text-white font-semibold shadow-2xs"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-stone-100"
          }`}
          title="Switch to AutoNavi AMap tiles (China optimal)"
        >
          {locale === "en" ? "AMap" : "高德 AMap"}
        </button>
        <button
          type="button"
          onClick={() => setMapLayer("global")}
          className={`px-2.5 py-0.5 rounded-full transition-all ${
            mapLayer === "global"
              ? "bg-zinc-900 text-white font-semibold shadow-2xs"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-stone-100"
          }`}
          title="Switch to Global OpenStreetMap tiles (Worldwide optimal)"
        >
          {locale === "en" ? "Global" : "全球 Global"}
        </button>
      </div>

      {/* Bottom Right: Smart indicator */}
      <div className="absolute bottom-2 right-2 z-[400] bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-zinc-500 border border-stone-200 pointer-events-none">
        {mapLayer === "amap"
          ? locale === "en"
            ? "AMap Vector (China)"
            : "高德矢量底图 (中国)"
          : locale === "en"
          ? "OpenStreetMap (Global)"
          : "OpenStreetMap 全球底图"}
      </div>
    </div>
  );
};
