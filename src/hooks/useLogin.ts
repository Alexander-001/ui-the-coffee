import { LoginInputs } from "@/interfaces/user.interface";
import { loginUser } from "@/services/UserService/loginUser";
import { useState } from "react";

export const useLogin = () => {
  const [inputs, setInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginInputs>({
    email: "",
    password: "",
  });

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
      const inputParam = {
        email: inputs.email,
        password: inputs.password,
      };
      const { messageError, data } = await loginUser(inputParam);
    }
  };

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

  /*   useEffect(() => {
    getAddressById("12");
  }, []); */

  return {
    //* Variables
    inputs,
    errors,
    //* Functions
    onChangeInput,
    onSubmitLogin,
  };
};
