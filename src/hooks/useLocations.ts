import AppContext from "@/utils/AppContext";
import { StateAppContext } from "@/utils/AppContext/useInitialStateAppContext";
import { MapEvent } from "mapbox-gl";
import { useContext, useEffect, useState } from "react";
import { TOKEN_MAP } from "../../environments";

export const useLocations = () => {
  const { isAdmin }: StateAppContext = useContext<any>(AppContext);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [viewMap, setViewMap] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 9,
  });

  const tokenMap = TOKEN_MAP;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude, "position");
          setViewMap((prevState) => ({ ...prevState, latitude, longitude }));
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error);
        }
      );
    }
  }, [navigator.geolocation]);

  const handleMapClick = (event: MapEvent) => {
    console.log(event);
  };

  /*   useEffect(() => {
    if (!mapContainer.current) return;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position, "position");
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]);
          map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [longitude, latitude],
            zoom: 13,
          });

          map.current.on("mousedown", handleMapPress);
          map.current.on("mouseup", cancelMapPress);
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error);
        }
      );
    } else {
      console.error("La geolocalización no está soportada por este navegador.");
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []); */

  const onCloseOpenNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return {
    //* Variables
    viewMap,
    tokenMap,
    showNavbar,
    isAdmin,

    //* Functions
    onCloseOpenNavbar,
    setViewMap,
    handleMapClick,
  };
};
