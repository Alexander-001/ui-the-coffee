import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { TOKEN_MAP } from "../../environments";

export const useLocations = () => {
  mapboxgl.accessToken = TOKEN_MAP;
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
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

  return {
    //* Variables
    mapContainer,
    //* Functions
  };
};
