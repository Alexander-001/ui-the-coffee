import Direction from "@/components/Direction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLocations } from "@/hooks/useLocations";
import "@fontsource-variable/onest";
import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import ReactMapGl from "react-map-gl";

const Locations: React.FC<{}> = () => {
  const {
    //* Variables
    viewMap,
    tokenMap,
    showNavbar,
    isAdmin,

    //* Functions
    onCloseOpenNavbar,
    setViewMap,
    handleMapClick,
  } = useLocations();

  return (
    <div className="app-container relative">
      <Header />
      <div className="w-full h-screen z-10">
        <ReactMapGl
          {...viewMap}
          mapboxAccessToken={tokenMap}
          style={{ width: "100%", height: "100%", transitionDuration: "200" }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          onZoom={(e) => setViewMap(e.viewState)}
          onDragStart={(e) => setViewMap(e.viewState)}
          onDragEnd={(e) => setViewMap(e.viewState)}
          onMove={(e) => setViewMap(e.viewState)}
        ></ReactMapGl>
      </div>
      <div
        className={`absolute pt-[45px] bg-white flex flex-col w-[90%] md:w-[40%] xl:w-[30%] h-full border border-t-0 z-20 transition-transform duration-300 ease-in-out ${
          showNavbar ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between items-center pt-[25px] pr-[20px]">
          <h1 className="pl-8 text-gray-800 font-bold">Ubicaciones</h1>
          <button
            type="button"
            className="flex justify-center items-center bg-transparent hover:bg-gray-800 hover:text-white rounded-xl size-10"
            onClick={onCloseOpenNavbar}
          >
            <svg
              className="size-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only"></span>
          </button>
        </div>
        <div className="w-full pb-5">
          <input
            type="text"
            placeholder="Buscar dirección"
            name="search-direction"
            className="border border-black rounded-[9999px] mt-4 mb-4 ml-8 mr-8 p-1 pl-3 outline-none w-[85%]"
          />
          {isAdmin && (
            <button className="ml-8 bg-green-600 text-white p-2 rounded-xl w-[45%] h-8 flex justify-center items-center text-xs font-bold border-green-800 hover:bg-green-700 transition-all ease-in-out">
              Agregar nueva ubicación
            </button>
          )}
        </div>
        <div className="flex flex-col overflow-scroll mb-[100px] md:mb-[50px]">
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
        </div>
      </div>
      {!showNavbar && (
        <div className="absolute z-20 mt-16 ml-5">
          <button
            type="button"
            className="flex justify-center items-center bg-gray-800 hover:bg-gray-900 rounded-xl p-2 text-white"
            onClick={onCloseOpenNavbar}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3l4 4-4 4"
              />
            </svg>
            <span className="sr-only">Abrir</span>
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Locations;
