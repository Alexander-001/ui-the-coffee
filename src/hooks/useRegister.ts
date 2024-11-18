import { RegisterInputs } from "@/interfaces/user.interface";
import { registerUser } from "@/services/UserService/registerUser";
import { useState } from "react";

export const useRegister = () => {
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
      const inputParam = {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      };
      const { messageError, data } = await registerUser(inputParam);
    }
  };

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

  return {
    //* Variables
    inputs,
    errors,
    //* Functions
    onSubmitRegister,
    onChangeInput,
  };
};
