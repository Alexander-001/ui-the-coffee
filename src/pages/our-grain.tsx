import Header from "@/components/Header";
import { useOurGrain } from "@/hooks/useOurGrain";
import "@fontsource-variable/onest";

const OurGrain = () => {
  const {
    //* Variables
    //* Functions
  } = useOurGrain();
  return (
    <>
      <Header />
      <h1>Nuestro grano</h1>
    </>
  );
};

export default OurGrain;
