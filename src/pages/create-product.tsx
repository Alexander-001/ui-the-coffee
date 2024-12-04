import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import WarningModal from "@/components/Modals/WarningModal";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import { useIsAdmin } from "@/utils/Common";
import Link from "next/link";

const CreateProduct = () => {
  const {
    //* Variables
    loading,
    showModal,
    messageModal,
    isAdmin,
    inputs,
    errors,
    categories,

    //* Functions
    onSubmitCreateProduct,
    onChangeInput,
    onChangeImageFile,
    onClickCloseModal,
  } = useCreateProduct();

  useIsAdmin(isAdmin);
  return (
    <div className="app-container">
      <Header />
      {loading && (
        <>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10"></div>
          <Loader
            loading={loading}
            classLoader="items-center"
            message="Creando producto..."
          />
        </>
      )}
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
      <section className="bg-gray-200 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0  bg-gray-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Crear nuevo producto
              </h1>
              <form
                className="space-y-4 md:space-y-6" // @ts-ignore
                onSubmit={onSubmitCreateProduct}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresar nombre del producto
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={inputs.name} // @ts-ignore
                    onChange={onChangeInput}
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                    placeholder="Nombre del producto"
                  />
                  {errors.name && (
                    <p className="text-red-200 mt-3">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresar precio
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={inputs.price} // @ts-ignore
                    onChange={onChangeInput}
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                    placeholder="Precio del producto"
                  />
                  {errors.price && (
                    <p className="text-red-200 mt-3">{errors.price}</p>
                  )}
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresar descripción
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    value={inputs.description} // @ts-ignore
                    onChange={onChangeInput}
                    placeholder="Descripción del producto"
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                  />
                  {errors.description && (
                    <p className="text-red-200 mt-3">{errors.description}</p>
                  )}
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresar sku
                  </label>
                  <input
                    type="text"
                    name="sku"
                    id="sku"
                    value={inputs.sku} // @ts-ignore
                    onChange={onChangeInput}
                    placeholder="Sku del producto"
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                  />
                  {errors.sku && (
                    <p className="text-red-200 mt-3">{errors.sku}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Seleccionar categoria
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={inputs.category}
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" // @ts-ignore
                    onChange={onChangeInput}
                  >
                    <option value="">Seleccione</option>
                    {categories.map((el, idx) => (
                      <option key={idx} value={el.name}>
                        {el.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-200 mt-3">{errors.category}</p>
                  )}
                </div>
                <div>
                  <input
                    type="file"
                    name="image"
                    id="image" //@ts-ignore
                    onChange={onChangeImageFile}
                    className="hidden"
                  />
                  <label
                    className="bg-green-700 hover:bg-green-800 transition-all ease-in-out text-white px-4 py-2 rounded cursor-pointer" //@ts-ignore
                    for="image"
                  >
                    Seleccionar imagen
                  </label>
                  {errors.image && (
                    <p className="text-red-200 mt-3">{errors.image}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800  transition-all ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Crear producto
                </button>
                <p className="text-sm font-light text-gray-400">
                  <Link
                    href="/products"
                    className="font-medium text-primary-500 hover:underline "
                  >
                    Volver a productos
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CreateProduct;
