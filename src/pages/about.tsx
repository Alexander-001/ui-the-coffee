import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useAbout } from "@/hooks/useAbout";
import "@fontsource-variable/onest";

const About = () => {
  const {
    //* Variables
    //* Functions
  } = useAbout();
  return (
    <>
      <Header />
      <h1>Sobre nosotros</h1>
      <Footer />
    </>
  );
};

export default About;
