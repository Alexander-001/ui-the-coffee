import { useRouter } from "next/router";
import { useEffect } from "react";

export const useIndex = () => {
  const router = useRouter();

  const onClickLocations = () => {
    router.push("/locations");
  };

  const loadPage = async () => {
    /* const { data } = await getAllUsers();
    const {} = await getUserByUsername("Alexander"); */
  };

  useEffect(() => {
    loadPage();
  }, []);
  return {
    //* Variables
    router,
    //* Functions
    onClickLocations,
  };
};
