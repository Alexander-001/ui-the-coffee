import { useRouter } from "next/router";

export const useIndex = () => {
  const router = useRouter();

  const onClickLocations = () => {
    router.push("/locations");
  };
  return {
    //* Variables
    router,
    //* Functions
    onClickLocations,
  };
};
