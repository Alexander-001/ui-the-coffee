import "@fontsource-variable/onest";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header: React.FC<{}> = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-50 border-b-2">
      <header className="bg-white w-full h-12 text-black flex justify-between items-center px-4">
        <div>
          <img
            src="/logo.svg"
            alt="The Coffee"
            onClick={onClickLogo}
            className="cursor-pointer h-[15px] flex items-center"
          />
        </div>
        <div className="md:hidden w-full md:w-auto flex justify-end items-end">
          <li
            onClick={onClickToggleMenu}
            className="md:hidden flex items-center justify-center w-[32px] h-[32px] relative cursor-pointer z-50"
          >
            <span
              className={`absolute block w-[24px] h-[2px] bg-black transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45" : "-translate-y-[4px]"
              }`}
            ></span>
            <span
              className={`absolute block w-[24px] h-[2px] bg-black transition-transform duration-300 ease-in-out ${
                menuOpen ? "-rotate-45" : "translate-y-[4px]"
              }`}
            ></span>
          </li>
        </div>
        <div>
          <nav
            className={`fixed inset-0 bg-white flex flex-col items-center justify-center transition-transform transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } md:relative md:translate-x-0 md:flex-row md:items-center md:justify-end md:h-auto md:bg-transparent`}
          >
            <Link
              href="/about"
              className={`px-4 mb-4 md:mb-0 text-center font-bold text-lg md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                router.pathname === "/about" ? "after:w-full" : "after:w-0"
              }`}
            >
              Sobre nosotros
            </Link>
            <Link
              href="/our-grain"
              className={`px-4 mb-4 md:mb-0 text-center font-bold text-lg md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                router.pathname === "/our-grain" ? "after:w-full" : "after:w-0"
              }`}
            >
              Nuestro grano
            </Link>
            <Link
              href="/locations"
              className={`px-4 mb-4 md:mb-0 text-center font-bold text-lg md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                router.pathname === "/locations" ? "after:w-full" : "after:w-0"
              }`}
            >
              Nuestras tiendas
            </Link>
            <Link
              href="/contact"
              className={`px-4 mb-4 md:mb-0 text-center font-bold text-lg md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                router.pathname === "/contact" ? "after:w-full" : "after:w-0"
              }`}
            >
              Háblanos
            </Link>
            <Link
              href="/register"
              className={`px-4 mb-2 md:mb-0 text-center  font-bold text-lg md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                router.pathname === "/register" ? "after:w-full" : "after:w-0"
              }`}
            >
              Registro
            </Link>
            <Link
              href="/login"
              className="md:ml-4 text-lg md:text-xs text-center cursor-pointer font-bold md:mr-5 md:text-white md:bg-blue-500 md:hover:bg-blue-600 h-12 md:h-8 flex justify-center items-center md:p-2 md:rounded-[9999px]  transition-all ease-in-out"
            >
              Iniciar sesión
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
