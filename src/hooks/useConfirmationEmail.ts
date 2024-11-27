import { confirmationEmail } from "@/services/UserService/confirmationEmail.service";
import { useEffect, useState } from "react";

export const useConfirmationEmail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [hasCalled, setHasCalled] = useState(false);

  useEffect(() => {
    if (!hasCalled) {
      confirmEmail();
    }
  }, [hasCalled]);

  const confirmEmail = async () => {
    setLoading(true);
    setHasCalled(true);
    const { data } = await confirmationEmail();
    setMessageModal(data.message);
    if (data.user === null) {
      setLoading(false);
      return;
    }
    setLoading(false);
    setTimeout(() => {
      window.close();
    }, 5000);
  };

  const onClickCloseModal = () => {
    window.close();
  };

  return {
    //* Variables
    loading,
    messageModal,

    //* Functions
    onClickCloseModal,
  };
};
