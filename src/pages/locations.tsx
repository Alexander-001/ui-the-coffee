import Direction from "@/components/Direction";
import Footer from "@/components/Footer";
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
      <div className="bg-white flex flex-col w-[450px] h-screen absolute z-40 border border-t-0 pb-5">
        <input
          type="text"
          placeholder="Buscar dirección"
          name="search-direction"
          className="border border-black rounded-[9999px] mt-4 mb-4 ml-8 mr-8 p-1 pl-3 outline-none"
        />
        <div className="flex flex-col overflow-scroll">
          <div className="w-full flex justify-center items-center mt-5 mb-5">
            <div className="border-b border-black w-[85%] "></div>
          </div>
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
          <Direction />
        </div>
      </div>
      <div ref={mapContainer} className="w-full h-screen"></div>
      <Footer />
    </div>
  );
};

export default Locations;
