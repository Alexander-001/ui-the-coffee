import { LoginInputs } from "@/interfaces/user.interface";
import { loginUser } from "@/services/UserService/loginUser.service";
import AppContext from "@/utils/AppContext";
import { StateAppContext } from "@/utils/AppContext/useInitialStateAppContext";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export const useLogin = () => {
  const { auth }: StateAppContext = useContext<any>(AppContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputs, setInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginInputs>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const validation = () => {
    let email: string = "";
    let password: string = "";
    if (inputs.email === "") {
      email = "Se debe ingresar correo.";
    } else email = "";
    if (inputs.password === "") {
      password = "Se debe ingresar contraseña.";
    } else password = "";

    setErrors((prevState) => ({
      ...prevState,
      email,
      password,
    }));
    if (inputs.email !== "" && inputs.password !== "") {
      return true;
    } else return false;
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

  const onSubmitLogin = async (event: Event) => {
    event.preventDefault();
    if (validation()) {
      setLoading(true);
      const inputParam = {
        email: inputs.email,
        password: inputs.password,
      };
      const { data } = await loginUser(inputParam);
      if (data.message !== "" && data.token === "") {
        setShowModal(true);
        setMessageModal(data.message);
      }
      if (data.token !== "") {
        sessionStorage.setItem("access_token", data.token);
        auth(data.token);
        router.push("/");
      }
      setLoading(false);
    }
  };

  const onClickCloseModal = () => {
    setShowModal(!showModal);
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    //* Variables
    loading,
    showModal,
    messageModal,
    inputs,
    errors,
    showPassword,

    //* Functions
    onChangeInput,
    onSubmitLogin,
    onClickCloseModal,
    onClickShowPassword,
  };
};
