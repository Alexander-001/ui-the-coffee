import { Product } from "@/interfaces/product.interface";
import { deleteImageCloudinary } from "@/services/ProductService/deleteImageCloudinary.service";
import { deleteProductById } from "@/services/ProductService/deleteProductById.service";
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
  const [dataImage, setDataImage] = useState<{ image: string; id: number }>({
    image: "",
    id: 0,
  });

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
      setIsErrorSession(data.errorSession);
      setProducts([]);
      if (data.errorSession) {
        setMessageModal(data.message);
      } else setMessageModal("No existen productos");
    }
    setLoading(false);
  };

  const onClickCloseModal = async () => {
    setShowModal(!showModal);
    if (isErrorSession) {
      logout(setValuesToken);
      router.push("/");
    }
  };

  const onClickEditImage = (id: number) => {
    console.log("Editando id: ", dataImage);
  };

  const onClickDeleteImage = (imageUrl: string, id: number) => {
    const splitImage = imageUrl.split("/");
    const image = splitImage[splitImage.length - 1].split(".")[0];
    setDataImage({ image, id });
    setShowModal(true);
    setMessageModal("¿Estas seguro de eliminar esta imagen?");
  };

  const onClickAcceptModal = async () => {
    setShowModal(!showModal);
    setLoading(true);
    const { isErrorDeleteImage } = await deleteImageCloudinary(dataImage.image);
    if (isErrorDeleteImage) {
      setShowModal(true);
      setMessageModal("Hubo un error al eliminar imagen");
      setDataImage({ image: "", id: 0 });
      setLoading(false);
      return;
    }
    const { data } = await deleteProductById(dataImage.id.toString());
    setIsErrorSession(data.errorSession);
    setShowModal(true);
    if (data.errorSession) setIsErrorSession(data.errorSession);
    setMessageModal(data.message);
    setDataImage({ image: "", id: 0 });
    setLoading(false);
    getProducts();
  };

  return {
    //* Variables
    isAdmin,
    products,
    loading,
    showModal,
    messageModal,
    dataImage,

    //* Functions
    onClickCloseModal,
    onClickEditImage,
    onClickDeleteImage,
    onClickAcceptModal,
  };
};
