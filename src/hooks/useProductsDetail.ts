import { Product } from "@/interfaces/product.interface";
import { getAllProducts } from "@/services/ProductService/getAllProducts.service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useProductsDetail = () => {
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

  return {
    //* Variables
    product,
    showModal,
    messageModal,

    //* Functions
    onClickCloseModal,
  };
};
