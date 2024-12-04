import { ProductService } from "@/interfaces/product.interface";
import { ProductsCategories } from "@/interfaces/productsCategories.interface";
import { getAllCategories } from "@/services/ProductsCategoriesService/getAllCategories.service";
import { addProduct } from "@/services/ProductService/addProduct.service";
import { uploadImageCloudinary } from "@/services/ProductService/uploadImageCloudinary.service";
import AppContext from "@/utils/AppContext";
import { StateAppContext } from "@/utils/AppContext/useInitialStateAppContext";
import { logout } from "@/utils/Common";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export const useCreateProduct = () => {
  const { isAdmin, setValuesToken }: StateAppContext =
    useContext<any>(AppContext);
  const [file, setFile] = useState<Blob | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [isErrorSession, setIsErrorSession] = useState<boolean>(false);
  const [categories, setCategories] = useState<ProductsCategories[]>([]);
  const [inputs, setInputs] = useState<ProductService>({
    name: "",
    price: "",
    description: "",
    sku: "",
    image: "",
    category: "",
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

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    setLoading(true);
    const { data } = await getAllCategories();
    if (data.errorSession) {
      setIsErrorSession(true);
      setLoading(false);
      return;
    }
    setCategories(data.categories || []);
    setLoading(false);
  };

  const onSubmitCreateProduct = async (event: Event) => {
    event.preventDefault();
    if (validation()) {
      setLoading(true);
      if (file) {
        const { isErrorUploadImage, url } = await uploadImageCloudinary(file);
        if (isErrorUploadImage) {
          setShowModal(true);
          setMessageModal("Hubo un error al subir imágen");
          setLoading(false);
          return;
        }
        const bodyParams = {
          name: inputs.name,
          price: parseInt(inputs.price.toString()),
          description: inputs.description,
          sku: inputs.sku,
          image: url,
          category: inputs.category,
        };
        const { data } = await addProduct(bodyParams);
        setShowModal(true);
        setMessageModal(data.message);
        if (data.errorSession) setIsErrorSession(true);
      } else {
        setShowModal(true);
        setMessageModal("No se ha seleccionado ninguna imagen");
      }
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

  const onChangeImageFile = (event: Event) => {
    const { files } = event.target as HTMLInputElement;
    if (files?.length === 1) {
      if (files[0].type === "image/png" || files[0].type === "image/jpeg") {
        setFile(files[0]);
        setInputs((prevState) => ({ ...prevState, image: files[0].name }));
      } else {
        setFile(undefined);
        setMessageModal("El archivo seleccionado no es una imagen.");
        setShowModal(true);
      }
    } else {
      setFile(undefined);
      setMessageModal("No se eligió ningún archivo.");
      setShowModal(true);
    }
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

  const onClickCloseModal = () => {
    setShowModal(!showModal);
    if (isErrorSession) {
      logout(setValuesToken);
      router.push("/");
    } else {
      router.push("/products");
    }
  };

  return {
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
  };
};
