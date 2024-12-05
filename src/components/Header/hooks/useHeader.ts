import AppContext from "@/utils/AppContext";
import { StateAppContext } from "@/utils/AppContext/useInitialStateAppContext";
import { decodedToken, logout } from "@/utils/Common";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export const useHeader = () => {
  const { setValuesToken, username }: StateAppContext =
    useContext<any>(AppContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClickCloseSesion, setIsClickCloseSesion] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const router = useRouter();

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = () => {
    const token = sessionStorage.getItem("access_token");
    if (token) {
      const { payload } = decodedToken(token || "");
      if (payload.authorities.length === 0) {
        setShowModal(true);
        setMessageModal("Hubo un error al obtener credenciales del usuario.");
        return;
      }
      const isAdmin = payload.authorities.some(
        (auth: any) => auth.authority === "ROLE_ADMIN"
      );
      setShowModal(false);
      setMessageModal("");
      setValuesToken(payload.authorities, payload.username, isAdmin);
    }
  };

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onClickCloseModal = () => {
    if (!isClickCloseSesion) {
      logout(setValuesToken);
    }
    setShowModal(!showModal);
    setIsClickCloseSesion(false);
  };

  const onClickCloseSession = () => {
    setIsClickCloseSesion(true);
    setShowModal(true);
    setMessageModal("¿Estás seguro de cerrar tu sesión?");
    setIsDropdownOpen(false);
  };

  const onClickAcceptModal = () => {
    logout(setValuesToken);
    router.push("/login");
    setShowModal(false);
  };

  return {
    //* Variables
    showModal,
    messageModal,
    menuOpen,
    router,
    username,
    isDropdownOpen,
    isClickCloseSesion,

    //* Functions
    onClickLogo,
    onClickToggleMenu,
    onClickCloseModal,
    toggleDropdown,
    onClickCloseSession,
    onClickAcceptModal,
  };
};
