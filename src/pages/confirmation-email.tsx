import Header from "@/components/Header";
import Loader from "@/components/Loader";
import WarningModal from "@/components/Modals/WarningModal";
import { useConfirmationEmail } from "@/hooks/useConfirmationEmail";
import { useLoggedIn } from "@/utils/Common";
import React from "react";

const ConfirmationEmail: React.FC<{}> = () => {
  const {
    //* Variables
    loading,
    messageModal,
    //* Functions
    onClickCloseModal,
  } = useConfirmationEmail();

  useLoggedIn();

  return (
    <div>
      <Header />
      <div className="mt-[8rem]">{loading && <Loader />}</div>
      <>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10"></div>
        <div className="z-20 fixed inset-0 flex items-center justify-center">
          <WarningModal
            message={messageModal}
            onClickClose={onClickCloseModal}
          />
        </div>
      </>
    </div>
  );
};

export default ConfirmationEmail;
