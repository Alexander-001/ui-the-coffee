import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import WarningModal from "@/components/Modals/WarningModal";
import ProductForm from "@/components/ProductForm";
import { useUpdateProduct } from "@/hooks/useUpdateProduct";
import { useIsAdmin } from "@/utils/Common";

const UpdateProduct = () => {
  const {
    //* Variables
    isAdmin,
    loading,
    showModal,
    messageModal,
    inputs,
    errors,
    categories,
    //* Functions
    onSubmitUpdateProduct,
    onChangeInput,
    onChangeImageFile,
    goBackProducts,
    onClickCloseModal,
  } = useUpdateProduct();
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
            message="Actualizando producto..."
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
        title="Actualizar producto"
        inputs={inputs}
        errors={errors}
        categories={categories}
        buttonText="Actualizar producto"
        onSubmit={onSubmitUpdateProduct}
        onChangeInput={onChangeInput}
        onChangeImageFile={onChangeImageFile}
        goBackProducts={goBackProducts}
      />
      <Footer />
    </div>
  );
};

export default UpdateProduct;
