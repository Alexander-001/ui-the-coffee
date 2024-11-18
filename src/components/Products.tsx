import React, { useEffect, useState } from "react";

const Products: React.FC<{}> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [productsPerPage, setProductsPerPage] = useState<number>(4);

  const products: any = [];
  const getProductsPerPage = () => {
    if (typeof window === "undefined") return 8;
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 1024) return 4;
    return 8;
  };

  useEffect(() => {
    setProductsPerPage(getProductsPerPage());
    const handleResize = () => setProductsPerPage(getProductsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / productsPerPage);
  const slides = Array.from({ length: totalSlides }, (_, index) =>
    products.slice(
      index * productsPerPage,
      index * productsPerPage + productsPerPage
    )
  );

  const onClickPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const onClickNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`flex justify-center h-full items-center mt-5`}>
              {/* {slide.map((prod, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col m-5 cursor-pointer ${
                    productsPerPage === 1 ? "min-w-full" : "w-auto"
                  }`}
                >
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="h-20 mx-auto"
                  />
                  <p className="text-center font-semibold mt-2">{prod.title}</p>
                </div>
              ))} */}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={onClickPrevious}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={onClickNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Products;
