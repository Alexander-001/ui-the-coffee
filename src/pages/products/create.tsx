import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import WarningModal from "@/components/Modals/WarningModal";
import ProductForm from "@/components/ProductForm";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import { useIsAdmin } from "@/utils/Common";

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
      <ProductForm
        title="Crear nuevo producto"
        inputs={inputs}
        errors={errors}
        categories={categories}
        buttonText="Crear producto"
        onSubmit={onSubmitCreateProduct}
        onChangeInput={onChangeInput}
        onChangeImageFile={onChangeImageFile}
        goBackProducts={() => {}}
      />
      <Footer />
    </div>
  );
};

export default CreateProduct;
