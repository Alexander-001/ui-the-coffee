import { addProduct } from "@/services/ProductService/addProduct";
import { getAllProducts } from "@/services/ProductService/getAllProducts";
import { base64ToPdfDownload } from "@/utils/Common";
import { useEffect, useState } from "react";

export const useCreateProduct = () => {
  const [file, setFile] = useState<Blob | undefined>(undefined);
  const [fileText, setFileText] = useState<string>("");
  const [base64img, setBase64img] = useState<string>("");
  const allProducts = async () => {
    const { data } = await getAllProducts();
    base64ToPdfDownload(data[1].image);
    setBase64img(data[0].image);
  };
  useEffect(() => {
    allProducts();
  }, []);

  const onChangeImageFile = (event: Event) => {
    const { value, files } = event.target as HTMLInputElement;
    if (files?.length === 1) {
      if (files[0].type === "image/png" || files[0].type === "image/jpeg") {
        setFile(files[0]);
      } else {
        setFile(undefined);
        setFileText("El archivo seleccionado no es una imagen.");
      }
    } else {
      setFile(undefined);
      setFileText("No se eligió ningún archivo.");
    }
  };

  const onSubmiCreateProduct = (event: Event) => {
    event.preventDefault();
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
      fileReader.onload = async () => {
        const renderFile = fileReader.result
          ?.toString()
          .match(/^data:.+?,(.+)$/);
        const base64: string = renderFile ? renderFile[1] : "";
        const bodyParams = {
          name: "Producto1",
          price: 2000,
          description: "Producto description",
          sku: "8765442",
          image: base64,
        };
        const {} = await addProduct(bodyParams);
      };
    }
  };

  return {
    //* Variables

    //* Functions
    onChangeImageFile,
    onSubmiCreateProduct,
  };
};
