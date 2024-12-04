import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import WarningModal from "@/components/Modals/WarningModal";
import { useCreateCategory } from "@/hooks/useCreateCategory";
import { useIsAdmin } from "@/utils/Common";
import Link from "next/link";

const CreateCategory = () => {
  const {
    //* Variables
    loading,
    showModal,
    messageModal,
    inputs,
    errors,
    isAdmin,

    //* Functions
    onClickCloseModal,
    onSubmitCreateCategory,
    onChangeInput,
  } = useCreateCategory();

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
            message="Creando categoria..."
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
                Crear nueva categoria
              </h1>
              <form
                className="space-y-4 md:space-y-6" // @ts-ignore
                onSubmit={onSubmitCreateCategory}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresar nombre de categoria
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={inputs.name} // @ts-ignore
                    onChange={onChangeInput}
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                    placeholder="Nombre de categoria"
                  />
                  {errors.name && (
                    <p className="text-red-200 mt-3">{errors.name}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800  transition-all ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Crear categoria
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

export default CreateCategory;
