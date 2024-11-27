import React from "react";

const Direction: React.FC<{}> = () => {
  return (
    <div className="border-b border-black h-[9rem] flex items-center ml-8 mr-8 mb-5 pb-5">
      <img
        src="https://storage.googleapis.com/thecoffee-ws/images/434860814_2637576303082280_2601889237979316630_n_800x800.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1732676968&Signature=bvDdVEYowxjEZY3jNpT6pCNimcewckHKmLEYR%2BWTzkbsE0NzXABO4Xj051KBQvUsojo4InAnrV6Ex%2FBCPiOGd0qbwASWE9hY3Qi97VB2ijkvy5tZjM5nMc11fTrhDYYl8N%2BJuj0XOb6SdFYeVe%2BHZ4iov9v%2FBs52uHTS%2FrWPUckQWHjCa501aGXnsf3P8J6Y50xBYZSIHvK89XLO2iumpK102pR9z%2B1h9picWll6%2F7fnpmNQA061fcR0%2BE%2FYJ5APJu7%2Bvl%2BWUtQzlc2ziRJ%2BEw7mlkv9PkklGqXHrtpi1E6ssrLsEuDeZ1IKETRKfqPfNu8M4%2FiePQSNdVDl6YId8w%3D%3D"
        alt=""
        className="size-28 rounded-md"
      />
      <div className="ml-5 h-full flex flex-col justify-start mt-10 w-full">
        <h1 className="font-bold text-sm mb-2">The Coffee Manquehue</h1>
        <p className="text-xs mb-2">Av Manquehue, 321 - Las Condes.</p>
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
