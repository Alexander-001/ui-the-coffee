import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WarningModal from "@/components/Modals/WarningModal";
import { Product } from "@/interfaces/product.interface";
import { getAllProducts } from "@/services/ProductService/getAllProducts.service";
import "@fontsource-variable/onest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getProducts(id);
  }, [id]);

  const getProducts = async (id: any) => {
    const { data } = await getAllProducts();
    if (data.products.length > 0) {
      if (id) {
        const productFound = data.products.find(
          (prod) => prod.id === parseInt(id)
        );
        setProduct(productFound ? productFound : null);
      }
    } else {
      setShowModal(true);
      setMessageModal("No existen productos");
    }
  };

  const onClickCloseModal = () => {
    router.push("/products");
  };

  console.log(product?.image);
  return (
    <>
      <Header />
      {showModal ? (
        <div>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10"></div>
          <div className="z-20 fixed inset-0 flex items-center justify-center">
            <WarningModal
              message={messageModal}
              onClickClose={onClickCloseModal}
            />
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 h-screen flex items-center justify-center w-full">
          <div className="flex flex-col lg:flex-row w-full max-w-[90%] lg:max-w-[70%] xl:max-w-[60%] mx-auto">
            {/* Imagen */}
            <div className="w-full lg:w-[50%] mb-6 lg:mb-0">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full max-h-[60vh] lg:max-h-[70vh] object-cover rounded-3xl shadow-xl"
              />
            </div>

            {/* Contenido de texto */}
            <div className="w-full lg:w-[50%] flex flex-col justify-start lg:pl-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-left text-gray-900">
                {product?.name}
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mt-4">
                {product?.description}
              </p>
              <p className="text-2xl lg:text-3xl text-blue-600 mt-6 font-extrabold">
                ${product?.price}
              </p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
