"use client";
import { useState } from "react";
import { requestSetToken } from "../request";

interface InitialStateAppContext {
  token: string;
  authorities: Array<{ authority: string }>;
  username: string;
  isAdmin: boolean;
}

export const initialState: InitialStateAppContext = {
  token: "",
  authorities: [],
  username: "",
  isAdmin: false,
};

export const useInitialStateAppContext = () => {
  const [state, setState] = useState<InitialStateAppContext>(initialState);

  const auth = (token: string) => {
    setState((prevState) => ({ ...prevState, token }));
  };

  const setValuesToken = (
    authorities: Array<{ authority: string }>,
    username: string,
    isAdmin: boolean
  ) => {
    setState((prevState) => ({ ...prevState, authorities, username, isAdmin }));
  };

  const token =
    typeof window !== "undefined"
      ? state.token || sessionStorage.getItem("access_token")
      : state.token;

  requestSetToken(token ? token : "");

  return {
    //* Variables
    token: state.token,
    authorities: state.authorities,
    username: state.username,
    isAdmin: state.isAdmin,
    //* Functions
    auth,
    setValuesToken,
  };
};

export type StateAppContext = ReturnType<typeof useInitialStateAppContext>;
