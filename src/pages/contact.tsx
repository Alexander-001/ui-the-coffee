import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useContact } from "@/hooks/useContact";
import "@fontsource-variable/onest";

const Contact = () => {
  const {
    //* Variables
    //* Functions
  } = useContact();
  return (
    <>
      <Header />
      <h1>Contacto</h1>
      <Footer />
    </>
  );
};

export default Contact;
