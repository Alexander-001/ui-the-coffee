import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    if (token !== null) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, []);
  useEffect(() => {
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);
};

export const useIsAdmin = (admin: boolean) => {
  const router = useRouter();
  useEffect(() => {
    if (!admin) router.push("/products");
  }, [admin]);
};

export const decodedToken = (token: string) => {
  const parts: string[] = token.split(".");
  const response = { payload: { authorities: [], username: "" } };
  if (parts.length !== 3) {
    response.payload.authorities = [];
    response.payload.username = "";
    return response;
  }
  const decodeBase64 = (str: string) =>
    JSON.parse(atob(str.replace(/-/g, "+").replace(/_/g, "/")));
  try {
    const data = decodeBase64(parts[1]);
    response.payload.username = data.username || "";
    const authorities: any = transformAuthorities(data.authorities);
    response.payload.authorities = authorities;
  } catch (error) {
    response.payload.authorities = [];
    response.payload.username = "";
  }
  return response;
};

const transformAuthorities = (input: string): { authority: string }[] => {
  try {
    const parsedAuthorities = JSON.parse(input);
    if (!Array.isArray(parsedAuthorities)) return [];
    return parsedAuthorities.map((auth) => ({
      authority: auth.authority || "",
    }));
  } catch (error) {
    return [];
  }
};

export const logout = (
  setValuesToken: (
    authorities: any[],
    username: string,
    isAdmin: boolean
  ) => void
) => {
  sessionStorage.removeItem("access_token");
  setValuesToken([], "", false);
};

export const manageSessionError = (
  error: { status: number },
  service: string
) => {
  if (error.status === 401) {
    return {
      message: "Tu sesión caduco, por favor inicia sesión nuevamente",
      errorSession: true,
    };
  }
  return {
    message: `Hubo un error en el servicio: ${service}`,
    errorSession: false,
  };
};
