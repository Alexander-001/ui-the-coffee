import React from "react";

const Direction: React.FC<{}> = () => {
  return (
    <div className="border-b border-black h-[9rem] flex items-center ml-8 mr-8 mb-5 pb-5">
      <img
        src="http://res.cloudinary.com/doubv721t/image/upload/v1733342846/oat9ql0hlbqedowudq5d.jpg"
        alt=""
        className="size-28 rounded-md"
      />
      <div className="ml-5 h-full flex flex-col justify-start mt-10 w-full">
        <h1 className="font-bold text-sm mb-2">Cafeteria</h1>
        <p className="text-xs mb-2">Av Manquehue - Las Condes.</p>
        <p className="text-xs">
          Santiago-Metropolitana - <span>Chile</span>
        </p>
        <div className="mt-2 w-full flex justify-end">
          <button className="bg-white rounded-[9999px] w-[30%] text-black border border-black text-sm hover:bg-black hover:text-white transition-all ease-in-out duration-500">
            Menú
          </button>
        </div>
      </div>
    </div>
  );
};

export default Direction;
