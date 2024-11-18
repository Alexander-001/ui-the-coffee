import Header from "@/components/Header";
import { useLocations } from "@/hooks/useLocations";
import "@fontsource-variable/onest";
import React from "react";

const Locations: React.FC<{}> = () => {
  const {
    //* Variables
    mapContainer,
  } = useLocations();

  return (
    <div>
      <Header />
      <div ref={mapContainer} className="w-full h-screen" />
    </div>
  );
};

export default Locations;
