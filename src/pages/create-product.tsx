import Header from "@/components/Header";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import "@fontsource-variable/onest";

const CreateProduct = () => {
  const {
    //* Variables
    //* Functions
    onSubmiCreateProduct,
    onChangeImageFile,
  } = useCreateProduct();
  return (
    <div className="h-full">
      <Header />
      <section className="bg-gray-200 h-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0  bg-gray-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Crear nuevo producto
              </h1>
              <form
                className="space-y-4 md:space-y-6" // @ts-ignore
                onSubmit={onSubmiCreateProduct}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresar nombre del producto
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    // value={inputs.username} // @ts-ignore
                    // onChange={onChangeInput}
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                    placeholder="Nombre de usuario"
                  />
                  {/* {errors.username && (
                    <p className="text-red-200 mt-3">{errors.username}</p>
                  )} */}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresar precio
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    // value={inputs.email} // @ts-ignore
                    // onChange={onChangeInput}
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                    placeholder="correo@correo.com"
                  />
                  {/* {errors.email && (
                    <p className="text-red-200 mt-3">{errors.email}</p>
                  )} */}
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresar descripción
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    // value={inputs.password} // @ts-ignore
                    // onChange={onChangeInput}
                    placeholder="Descripción"
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                  />
                  {/* {errors.password && (
                    <p className="text-red-200 mt-3">{errors.password}</p>
                  )} */}
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresar sku
                  </label>
                  <input
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    // value={inputs.confirmPassword} // @ts-ignore
                    //onChange={onChangeInput}
                    placeholder="Sku"
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                  />
                  {/* {errors.confirmPassword && (
                    <p className="text-red-200 mt-3">
                      {errors.confirmPassword}
                    </p>
                  )} */}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresar imagén
                  </label>
                  <input
                    type="file"
                    name="confirmPassword"
                    id="confirmPassword" //@ts-ignore
                    onChange={onChangeImageFile}
                    // value={inputs.confirmPassword} // @ts-ignore
                    //onChange={onChangeInput}
                    placeholder="Sku"
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Crear producto
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateProduct;
