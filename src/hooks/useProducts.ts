import { Product } from "@/interfaces/product.interface";
import { ProductsCategories } from "@/interfaces/productsCategories.interface";
import { deleteImageCloudinary } from "@/services/ProductService/deleteImageCloudinary.service";
import { deleteProductById } from "@/services/ProductService/deleteProductById.service";
import { getAllProducts } from "@/services/ProductService/getAllProducts.service";
import AppContext from "@/utils/AppContext";
import { StateAppContext } from "@/utils/AppContext/useInitialStateAppContext";
import { logout } from "@/utils/Common";
import { singletonProduct } from "@/utils/singleton";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export const useProducts = () => {
  const { isAdmin, setValuesToken }: StateAppContext =
    useContext<any>(AppContext);
  const [products, setProducts] = useState<Array<Product>>([]);
  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [isErrorSession, setIsErrorSession] = useState<boolean>(false);
  const [categories, setCategories] = useState<ProductsCategories[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    description: "",
    sku: "",
    image: "",
    category: "",
  });
  const [activeCategory, setActiveCategory] = useState<string>(
    "Todas las categorias"
  );
  const [dataImage, setDataImage] = useState<{ image: string; id: number }>({
    image: "",
    id: 0,
  });

  const router = useRouter();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    const { data } = await getAllProducts();
    if (data.products.length > 0) {
      const uniqueCategories = new Set<string>();
      data.products.forEach((product) => {
        uniqueCategories.add(product.category);
      });
      const arrayCategories = Array.from(uniqueCategories).map(
        (category, index) => ({
          id: index,
          name: category,
        })
      );
      setCategories(arrayCategories);
      setProducts(data.products);
      setFilteredProducts(data.products);
    } else {
      setShowModal(true);
      setIsErrorSession(data.errorSession);
      setProducts([]);
      setFilteredProducts([]);
      if (data.errorSession) {
        setMessageModal(data.message);
      } else setMessageModal("No existen productos");
    }
    setLoading(false);
  };

  const onClickCloseModal = async () => {
    setShowModal(!showModal);
    if (isErrorSession) {
      logout(setValuesToken);
      router.push("/");
    }
  };

  const onClickEditImage = (product: Product) => {
    setSelectedProduct(product);
    const { setProduct, setCategories } = singletonProduct;
    setProduct(product);
    setCategories(categories);
    router.push("/products/update");
  };

  const onClickDeleteImage = (imageUrl: string, id: number) => {
    const splitImage = imageUrl.split("/");
    const image = splitImage[splitImage.length - 1].split(".")[0];
    setDataImage({ image, id });
    setShowModal(true);
    setMessageModal("¿Estas seguro de eliminar esta imagen?");
  };

  const onClickAcceptModal = async () => {
    setShowModal(!showModal);
    setLoading(true);
    const { isErrorDeleteImage } = await deleteImageCloudinary(dataImage.image);
    if (isErrorDeleteImage) {
      setShowModal(true);
      setMessageModal("Hubo un error al eliminar imagen");
      setDataImage({ image: "", id: 0 });
      setLoading(false);
      return;
    }
    const { data } = await deleteProductById(dataImage.id.toString());
    setIsErrorSession(data.errorSession);
    setShowModal(true);
    if (data.errorSession) setIsErrorSession(data.errorSession);
    setMessageModal(data.message);
    setDataImage({ image: "", id: 0 });
    setLoading(false);
    getProducts();
  };

  const onClickCategory = (event: Event) => {
    const { textContent } = event.target as HTMLButtonElement;
    setActiveCategory(textContent || "");
    setShowDropdown(false);
    if (textContent === "Todas las categorias") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((el) => el.category === textContent);
      setFilteredProducts(filtered);
    }
  };

  return {
    //* Variables
    isAdmin,
    products,
    filteredProducts,
    loading,
    showModal,
    messageModal,
    dataImage,
    categories,
    activeCategory,
    showDropdown,

    //* Functions
    onClickCloseModal,
    onClickEditImage,
    onClickDeleteImage,
    onClickAcceptModal,
    onClickCategory,
    setShowDropdown,
  };
};
