import { Product } from "@/interfaces/product.interface";
import { getAllProducts } from "@/services/ProductService/getAllProducts.service";
import AppContext from "@/utils/AppContext";
import { StateAppContext } from "@/utils/AppContext/useInitialStateAppContext";
import { logout } from "@/utils/Common";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export const useProducts = () => {
  const { isAdmin, setValuesToken }: StateAppContext =
    useContext<any>(AppContext);
  const [products, setProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [isErrorSession, setIsErrorSession] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    const { data } = await getAllProducts();
    if (data.products.length > 0) {
      setProducts(data.products);
    } else {
      setShowModal(true);
      setMessageModal(data.message);
      setIsErrorSession(data.errorSession);
    }
    setLoading(false);
  };

  const onClickCloseModal = () => {
    setShowModal(!showModal);
    if (isErrorSession) {
      logout(setValuesToken);
      router.push("/");
    }
  };

  const onClickImage = () => {};

  const onClickEditImage = (id: number) => {
    console.log("Editando id: ", id);
  };

  const onClickDeleteImage = (id: number) => {
    setShowModal(true);
    setMessageModal("¿Estas seguro de eliminar esta imagen?");
  };

  return {
    //* Variables
    isAdmin,
    products,
    loading,
    showModal,
    messageModal,

    //* Functions
    onClickCloseModal,
    onClickImage,
    onClickEditImage,
    onClickDeleteImage,
  };
};
