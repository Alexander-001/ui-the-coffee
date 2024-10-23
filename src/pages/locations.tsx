import Header from "@/components/Header";
import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import { TOKEN_MAP } from "../../environments";

const Locations: React.FC<{}> = () => {
  mapboxgl.accessToken = TOKEN_MAP;

  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Posición actual:", position);
          const { latitude, longitude } = position.coords;
          if (map.current === null && mapContainer.current) {
            map.current = new mapboxgl.Map({
              container: mapContainer.current,
              style: "mapbox://styles/mapbox/streets-v11",
              center: [longitude, latitude],
              zoom: 12,
            });
          }
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error);
        }
      );
    } else {
      console.error("La geolocalización no está soportada por este navegador.");
    }
  }, []);
  return (
    <div>
      <Header />
      <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
    </div>
  );
};

export default Locations;
