import React, { useState } from "react";

const Header: React.FC<{}> = () => {
  const [activeClass, setActiveClass] = useState<boolean>(false);

  const onClickBurgerMenu = () => {
    setActiveClass(!activeClass);
  };

  return (
    <div className="sticky top-0 z-50 border-b-2">
      <header className="bg-white w-full h-20 text-black flex justify-between items-center">
        <div>
          <ul className="flex p-5 ">
            <li className="p-1 font-bold leading-[14px] text-[10px] md:text-[20px] border-b-2 border-b-black">
              PT
            </li>
            <li className="p-1 font-bold leading-[14px] text-[10px] md:text-[20px]">
              EN
            </li>
            <li className="p-1 font-bold leading-[14px] text-[10px] md:text-[20px]">
              ES
            </li>
            <li className="p-1 font-bold leading-[14px] text-[10px] md:text-[20px]">
              FR
            </li>
            <li className="p-1 font-bold leading-[14px] text-[10px] md:text-[20px]">
              JP
            </li>
          </ul>
        </div>
        <div>
          <img
            src="/logo.svg"
            alt="The Coffee"
            className="cursor-pointer h-[15px] md:h-[25px] flex justify-center items-center"
          />
        </div>
        <div>
          <ul className="flex p-5 justify-center items-center">
            <li className="p-1 font-bold leading-[14px] text-[14px] flex items-center">
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="h-[40px] cursor-pointer"
              />
            </li>
            <li className="p-1 font-bold leading-[14px] text-[14px] flex items-center">
              <img
                src="/linkedin.svg"
                alt="Linkedin"
                className="h-[40px] cursor-pointer"
              />
            </li>
            <li className="p-1 font-bold leading-[14px] text-[14px] flex items-center">
              <img
                src="/youtube.svg"
                alt="Youtube"
                className="h-[40px] cursor-pointer"
              />
            </li>
            <li
              onClick={onClickBurgerMenu}
              className="p-1 font-bold leading-[14px] text-[14px] flex flex-col items-center justify-center w-[20px] h-[20px] relative ml-[10px] cursor-pointer"
            >
              <div
                className="w-full h-[3px] bg-black absolute"
                style={{
                  margin: "5px 0",
                  transition: "all .25s ease-in-out",
                  top: `${activeClass ? "5px" : "8px"}`,
                  transform: `${activeClass ? "rotate(-45deg)" : ""}`,
                }}
              ></div>
              <div
                className="w-full h-[3px] bg-black absolute "
                style={{
                  margin: "5px 0",
                  transition: "all .25s ease-in-out",
                  top: `${activeClass ? "5px" : "2px"}`,
                  transform: `${activeClass ? "rotate(45deg)" : ""}`,
                }}
              ></div>
            </li>
          </ul>
        </div>
      </header>
      <div
        className={`w-full h-20 bg-white text-black fixed top-0 left-0 md:top-auto md:left-auto z-40  justify-center overflow-hidden transition-all duration-500 ease-in-out ${
          activeClass
            ? "h-screen md:max-h-full md:h-auto top-0"
            : "h-0 md:h-auto -top-full"
        }`}
      >
        <div
          onClick={onClickBurgerMenu}
          className="absolute top-4 right-4 text-black text-4xl cursor-pointer md:hidden"
        >
          &times;
        </div>
        <ul className="flex flex-col md:flex-row justify-center items-center p-5 md:p-2 h-full md:mb-2">
          <a className="px-4 mb-2 md:mb-0 md:p-0 text-[20px] md:text-[17px] text-center cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Sobre nosotros
          </a>
          <a className="px-4 mb-2 md:mb-0 text-[20px] md:text-[17px] text-center cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Nuestro grano
          </a>
          <a className="px-4 mb-2 md:mb-0 text-[20px] md:text-[17px] text-center cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Nuestras tiendas
          </a>
          <a className="px-4 mb-2 md:mb-0 text-[20px] md:text-[17px] text-center cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Franquicia
          </a>
          <a className="px-4 mb-2 md:mb-0 text-[20px] md:text-[17px] text-center cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Háblanos
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
