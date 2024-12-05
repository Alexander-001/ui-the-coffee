import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import WarningModal from "@/components/Modals/WarningModal";
import { useProducts } from "@/hooks/useProducts";
import "@fontsource-variable/onest";
import Link from "next/link";

const Product = () => {
  const {
    //* Variables
    isAdmin,
    filteredProducts,
    loading,
    showModal,
    messageModal,
    dataImage,
    categories,
    activeCategory,
    showDropdown,

    //* Functions
    onClickCloseModal,
    onClickEditImage,
    onClickDeleteImage,
    onClickAcceptModal,
    onClickCategory,
    setShowDropdown,
  } = useProducts();

  return (
    <div className="app-container">
      <Header />
      {loading && (
        <>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10"></div>
          <Loader
            loading={loading}
            classLoader="items-center"
            message="Cargando productos..."
          />
        </>
      )}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10"></div>
          <div className="z-20 fixed inset-0 flex items-center justify-center">
            <WarningModal
              message={messageModal}
              okButton={dataImage.image !== "" && dataImage.id !== 0}
              onClickAccept={onClickAcceptModal}
              onClickClose={onClickCloseModal}
            />
          </div>
        </>
      )}
      <section className="bg-white mt-20">
        <div className="pt-16 px-4 mx-auto max-w-screen-xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            Nuestros productos seleccionados
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Desde cafés de origen único hasta mezclas artesanales, nuestra
            selección está cuidadosamente curada para satisfacer todos los
            paladares. Explora nuestras categorías, que incluyen cafés
            orgánicos, de comercio justo y opciones gourmet, y déjate seducir
            por descripciones cautivadoras que te transportarán a las tierras
            donde se cultivan estos tesoros.
          </p>
        </div>
        {isAdmin && (
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mx-20">
            <Link
              href="/products/create"
              className="transition-all ease-in-out outline-none inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Crear nuevo producto
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <div className="ml-2 mr-2"></div>
            <Link
              href="/products/create-category"
              className="transition-all ease-in-out outline-none inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Crear nueva categoria
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        )}
      </section>
      {filteredProducts.length > 0 && (
        <>
          <div className="flex items-center justify-center py-4 md:py-8 flex-wrap m-5">
            <div className="relative">
              <button
                type="button"
                className="bg-gray-800 flex justify-center hover:bg-gray-900 text-white font-medium rounded-full text-base px-5 py-2.5 text-center items-center w-[300px]"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {activeCategory}
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute z-10 mt-2 bg-white rounded-lg shadow-lg w-full">
                  <button
                    type="button" // @ts-ignore
                    onClick={onClickCategory}
                    className={`w-full px-4 py-2 text-left text-black hover:bg-blue-800 hover:text-white ${
                      activeCategory === "Todas las categorias"
                        ? "bg-blue-700 text-white"
                        : ""
                    }`}
                  >
                    Todas las categorias
                  </button>
                  {categories.map((el, idx) => (
                    <button
                      key={idx} // @ts-ignore
                      onClick={onClickCategory}
                      className={`w-full px-4 py-2 text-left text-black hover:bg-blue-800 hover:text-white ${
                        activeCategory === el.name
                          ? "bg-blue-700 text-white"
                          : ""
                      }`}
                    >
                      {el.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 md:mx-12 mb-40">
            {filteredProducts.map((el, idx) => (
              <div
                className="relative h-[100%] group transition-transform transform hover:scale-105 hover:translate-y-[-10px] rounded-lg overflow-hidden cursor-pointer"
                key={idx}
              >
                <Link href={`/products/${el.id}`}>
                  <img
                    className="h-full max-w-full rounded-lg"
                    src={el.image}
                    alt={el.name}
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-2 pb-5">
                  <div className="text-center font-bold text-xl md:text-3xl">
                    {el.name}
                  </div>
                  <div className="text-center text-xl">${el.price}</div>
                </div>
                {isAdmin && (
                  <div className="absolute right-2 top-2 hidden group-hover:block">
                    <div className="flex w-24 justify-between">
                      <img
                        src="/edit.svg"
                        alt="Editar"
                        className="text-md mr-2 size-10 cursor-pointer transition-all ease-in-out top-2 hover:bg-blue-100 bg-white text-gray-300 font-bold rounded-full"
                        onClick={() => onClickEditImage(el)}
                      />
                      <img
                        src="/close.svg"
                        alt="Cerrar"
                        className="text-md mr-2 size-10 text-xl cursor-pointer transition-all ease-in-out top-2 hover:bg-blue-100 bg-white text-gray-500 font-bold rounded-full"
                        onClick={() => onClickDeleteImage(el.image, el.id)}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Product;
