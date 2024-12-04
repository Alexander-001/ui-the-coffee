import { ProductsCategoriesService } from "@/interfaces/productsCategories.interface";
import { addProductCategory } from "@/services/ProductsCategoriesService/addProductCategory.service";
import AppContext from "@/utils/AppContext";
import { StateAppContext } from "@/utils/AppContext/useInitialStateAppContext";
import { logout } from "@/utils/Common";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export const useCreateCategory = () => {
  const { isAdmin, setValuesToken }: StateAppContext =
    useContext<any>(AppContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [isErrorSession, setIsErrorSession] = useState<boolean>(false);
  const [successCreated, setSuccessCreated] = useState<boolean>(false);
  const [inputs, setInputs] = useState<ProductsCategoriesService>({
    name: "",
  });
  const [errors, setErrors] = useState<ProductsCategoriesService>({
    name: "",
  });

  const router = useRouter();

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

  const onSubmitCreateCategory = async (event: Event) => {
    event.preventDefault();
    if (validation()) {
      setLoading(true);
      const bodyParams = {
        name: inputs.name,
      };
      const { data } = await addProductCategory(bodyParams);
      setShowModal(true);
      if (data.errorSession) setIsErrorSession(true);
      if (data.category === null && data.name !== undefined) {
        setMessageModal(data.name);
      }
      if (data.category !== null && data.name === undefined) {
        setMessageModal(data.message);
        setSuccessCreated(true);
      }
      setLoading(false);
    }
  };

  const onClickCloseModal = () => {
    setShowModal(!showModal);
    if (isErrorSession) {
      logout(setValuesToken);
      router.push("/");
    } else if (successCreated) router.push("/products");
  };

  const validation = () => {
    let name: string = "";
    if (inputs.name === "") {
      name = "Se debe ingresar nombre de categoria.";
    } else name = "";
    setErrors((prevState) => ({
      ...prevState,
      name,
    }));
    if (inputs.name !== "") {
      return true;
    } else return false;
  };

  return {
    //* Variables
    loading,
    showModal,
    messageModal,
    inputs,
    errors,
    isAdmin,

    //* Functions
    onChangeInput,
    onSubmitCreateCategory,
    onClickCloseModal,
  };
};
