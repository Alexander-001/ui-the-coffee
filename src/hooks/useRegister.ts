import { RegisterInputs } from "@/interfaces/user.interface";
import { registerUser } from "@/services/UserService/registerUser.service";
import AppContext from "@/utils/AppContext";
import { StateAppContext } from "@/utils/AppContext/useInitialStateAppContext";
import { logout } from "@/utils/Common";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export const useRegister = () => {
  const { setValuesToken }: StateAppContext = useContext<any>(AppContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [isErrorSession, setIsErrorSession] = useState<boolean>(false);
  const [inputs, setInputs] = useState<RegisterInputs>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<RegisterInputs>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const validation = () => {
    let username: string = "";
    let email: string = "";
    let password: string = "";
    let confirmPassword: string = "";
    if (inputs.username === "") {
      username = "Se debe ingresar nombre de usuario.";
    } else username = "";
    if (inputs.email === "") {
      email = "Se debe ingresar correo.";
    } else email = "";
    if (inputs.password === "") {
      password = "Se debe ingresar contraseña.";
    } else password = "";
    if (inputs.confirmPassword === "") {
      confirmPassword = "Se debe ingresar confirmación de contraseña.";
    } else confirmPassword = "";
    setErrors((prevState) => ({
      ...prevState,
      username,
      email,
      password,
      confirmPassword,
    }));
    if (
      inputs.username !== "" &&
      inputs.email !== "" &&
      inputs.password !== "" &&
      inputs.confirmPassword !== ""
    ) {
      if (inputs.password !== inputs.confirmPassword) {
        setErrors((prevState) => ({
          ...prevState,
          password: "Contraseñas no coinciden.",
          confirmPassword: "Contraseñas no coinciden.",
        }));
        return false;
      }
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

  const onSubmitRegister = async (event: Event) => {
    event.preventDefault();
    if (validation()) {
      setLoading(true);
      const inputParam = {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      };
      const { data } = await registerUser(inputParam);
      setMessageModal(data.message);
      setShowModal(true);
      setLoading(false);
      if (data.successRegister) {
        setTimeout(() => {
          router.push("/login");
        }, 5000);
        return;
      }
      if (data.errorSession) {
        setIsErrorSession(true);
      }
    }
  };

  const onClickCloseModal = () => {
    setShowModal(!showModal);
    if (isErrorSession) {
      logout(setValuesToken);
      router.push("/");
    }
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return {
    //* Variables
    loading,
    inputs,
    errors,
    showModal,
    messageModal,
    showPassword,
    showConfirmPassword,

    //* Functions
    onSubmitRegister,
    onChangeInput,
    onClickCloseModal,
    onClickShowPassword,
    onClickShowConfirmPassword,
  };
};
