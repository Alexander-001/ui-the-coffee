import { ProductService } from "@/interfaces/product.interface";
import { ProductsCategories } from "@/interfaces/productsCategories.interface";
import { updateImageCloudinary } from "@/services/ProductService/updateImageCloudinary.service";
import { updateProductById } from "@/services/ProductService/updateProductById.service";
import AppContext from "@/utils/AppContext";
import { StateAppContext } from "@/utils/AppContext/useInitialStateAppContext";
import { logout } from "@/utils/Common";
import { singletonProduct } from "@/utils/singleton";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export const useUpdateProduct = () => {
  const { getProduct, setProduct, getCategories } = singletonProduct;
  const { id, name, price, description, sku, image, category } = getProduct();
  const { isAdmin, setValuesToken }: StateAppContext =
    useContext<any>(AppContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [file, setFile] = useState<Blob | undefined>(undefined);
  const [isErrorSession, setIsErrorSession] = useState<boolean>(false);
  const [categories] = useState<ProductsCategories[]>(getCategories());
  const [inputs, setInputs] = useState<ProductService>({
    name,
    price,
    description,
    sku,
    image,
    category,
  });
  const [errors, setErrors] = useState<ProductService>({
    name: "",
    price: "",
    description: "",
    sku: "",
    image: "",
    category: "",
  });

  const router = useRouter();

  const onSubmitUpdateProduct = async (event: Event) => {
    event.preventDefault();
    if (validation()) {
      setLoading(true);
      let urlImage: string = inputs.image;
      if (file) {
        const splitImage = inputs.image.split("/");
        const publicIdImage = splitImage[splitImage.length - 1].split(".")[0];
        console.log(file);
        const { isErrorUpdateImage, url } = await updateImageCloudinary(
          file,
          publicIdImage
        );
        if (isErrorUpdateImage) {
          setShowModal(true);
          setMessageModal("Hubo un error al modificar imágen");
          setLoading(false);
          return;
        }
        urlImage = url;
      }
      const bodyParams = {
        name: inputs.name,
        price: parseInt(inputs.price.toString()),
        description: inputs.description,
        sku: inputs.sku,
        image: urlImage,
        category: inputs.category,
      };
      const { data } = await updateProductById(bodyParams, id.toString());
      setShowModal(true);
      setMessageModal(data.message);
      if (data.errorSession) setIsErrorSession(true);
      setLoading(false);
    }
  };

  const onChangeInput = (event: Event) => {
    const { name, value } = event.target as HTMLInputElement;
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validation = () => {
    let name: string = "";
    let price: string = "";
    let description: string = "";
    let sku: string = "";
    let image: string = "";
    let category: string = "";
    if (inputs.name === "") {
      name = "Se debe ingresar nombre del producto.";
    } else name = "";
    if (inputs.price === "") {
      price = "Se debe ingresar precio del producto.";
    } else price = "";
    if (inputs.description === "") {
      description = "Se debe ingresar descripción del producto.";
    } else description = "";
    if (inputs.sku === "") {
      sku = "Se debe ingresar sku del producto.";
    } else sku = "";
    if (inputs.image === "") {
      image = "Se debe ingresar imagen del producto.";
    } else image = "";
    if (inputs.category === "") {
      category = "Se debe ingresar categoria";
    } else category = "";
    setErrors((prevState) => ({
      ...prevState,
      name,
      price,
      description,
      sku,
      image,
      category,
    }));
    if (
      inputs.name !== "" &&
      inputs.price !== "" &&
      inputs.description !== "" &&
      inputs.sku !== "" &&
      inputs.image !== "" &&
      inputs.category !== ""
    ) {
      return true;
    } else return false;
  };

  const onChangeImageFile = (event: Event) => {
    const { files } = event.target as HTMLInputElement;
    if (files?.length === 1) {
      if (files[0].type === "image/png" || files[0].type === "image/jpeg") {
        setFile(files[0]);
        setInputs((prevState) => ({ ...prevState, image: files[0].name }));
      } else {
        setFile(undefined);
        setMessageModal("Solo se permiten archivos con formato JPEG o PNG.");
        setShowModal(true);
      }
    } else {
      setFile(undefined);
      setMessageModal("No se eligió ningún archivo.");
      setShowModal(true);
    }
  };

  const onClickCloseModal = () => {
    setShowModal(!showModal);
    if (isErrorSession) {
      logout(setValuesToken);
      router.push("/");
    } else {
      router.push("/products");
    }
  };

  const goBackProducts = () => {
    setProduct({
      id: 0,
      name: "",
      price: 0,
      description: "",
      sku: "",
      image: "",
      category: "",
    });
  };

  return {
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
    onClickCloseModal,
    goBackProducts,
  };
};
