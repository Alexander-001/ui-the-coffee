import Products from "@/components/Products";
import Stores from "@/components/Stores";
import "@fontsource-variable/onest";
import { useRouter } from "next/router";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter();

  const onClickLocations = () => {
    router.push("/locations");
  };

  return (
    <div>
      <Header />
      <Carousel />
      <div className="mt-20 md:mt-28">
        <div className="flex flex-col w-full justify-center items-center">
          <p className="w-[70%] md:w-[50%] text-3xl mb-5 font-extrabold">
            En the cofee:
          </p>
        </div>
        <div className="flex justify-center w-full">
          <p className="w-[70%] md:w-[50%]  text-md">
            El café es increíble. Nos amamos. Pero el sabor y el aroma son solo
            una parte de toda la experiencia. Sabíamos que faltaba algo. Algo
            que combinó con la pureza que representa el café. Lo encontramos, al
            otro lado del mundo. Japón Había todo lo que buscábamos. Sencillez,
            minimalismo y la búsqueda constante de la perfección. Inspirándonos
            en todo lo que vimos allí, se creó The Coffee. Lo mejor del café
            brasileño combinado con la pureza y el perfeccionismo de Japón.
            Sencillo.
          </p>
        </div>
      </div>
      <h1 className="text-center font-extrabold text-2xl md:text-3xl mt-20 mb-10">
        Nuestra línea de productos
      </h1>
      <Products />
      <h1 className="text-center font-extrabold text-2xl md:text-3xl mt-20 mb-10">
        Nuestras tiendas disponibles
      </h1>
      <Stores />
      <div className="w-full flex justify-center items-center mb-20">
        <button
          className="w-[85%] md:w-[30%] text-sm md:text-lg border-4 border-black font-bold rounded-[9999px] p-3 hover:bg-black hover:text-white transition-all ease-in-out"
          onClick={onClickLocations}
        >
          Descubre nuestras tiendas en todo el mundo
        </button>
      </div>
      <h1 className="text-center font-extrabold text-2xl md:text-3xl mt-20 mb-10">
        Nuestro menú
      </h1>
    </div>
  );
}