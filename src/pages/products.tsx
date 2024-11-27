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
    products,
    loading,
    showModal,
    messageModal,
    //* Functions
    onClickCloseModal,
  } = useProducts();
  return (
    <div className="h-full">
      <Header />
      {loading && <Loader />}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10"></div>
          <div className="z-20 fixed inset-0 flex items-center justify-center">
            <WarningModal
              message={messageModal}
              onClickClose={onClickCloseModal}
            />
          </div>
        </>
      )}
      <section className="bg-white ">
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
              href="/create-product"
              className="outline-none inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
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
          </div>
        )}
      </section>

      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap m-5">
        <button
          type="button"
          className="hover:border-blue-200 hover:bg-blue-900 bg-blue-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-white"
        >
          Todas las categorias
        </button>
        <button
          type="button"
          className="hover:border-blue-200 hover:bg-blue-900 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-white"
        >
          Gaming
        </button>
        <button
          type="button"
          className="hover:border-blue-200 hover:bg-blue-900 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-white"
        >
          Bags
        </button>
        <button
          type="button"
          className="hover:border-blue-200 hover:bg-blue-900 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-white"
        >
          Electronics
        </button>
        <button
          type="button"
          className="hover:border-blue-200 hover:bg-blue-900 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-white"
        >
          Gaming
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-12 mb-12">
        {products.map((el, idx) => (
          <div key={idx}>
            <img
              className="h-full max-w-full rounded-lg"
              src={`data:image/png;base64,${el.image}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
