import { createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface iCartContext {
  showProducts: (
    inputValue: string,
    event: React.FormEvent<HTMLFormElement>
  ) => void;
  filteredProducts: string;
  setFilteredProducts: React.Dispatch<React.SetStateAction<string>>;
  productsFilter: iProducts[];
  products: iProducts[];
  addProductCart: (productId: number) => void;
  currentSale: iProducts[];
  removeProductCart: (productId: number) => void;
  removeAllProductsCart: () => void;
  total: () => number;
  logout: () => void;
  openModalCart: boolean;
  setOpenModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  addQtdProductCart: (productId: number) => void;
  openInputSearch: boolean;
  setOpenInputSearch: React.Dispatch<React.SetStateAction<boolean>>;
  removeQtdProductCart: (productId: number) => void;
  totalQtd: () => number;
}

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  qtd: number;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = () => {
  const [products, setProducts] = useState([] as iProducts[]);
  const [productsFilter, setProductsFilter] = useState([] as iProducts[]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState([] as iProducts[]);
  const [openModalCart, setOpenModalCart] = useState(false);
  const [openInputSearch, setOpenInputSearch] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const token = localStorage.getItem("@TOKEN");

      try {
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const showProducts = (
    inputValue: string,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setOpenInputSearch(false);
    const productsFilter = products.filter((element) => {
      const productNameList = element.name.toLowerCase();
      const productNameInput = inputValue.toLowerCase();
      const productCategoryList = element.category.toLowerCase();

      if (
        productNameList.includes(productNameInput) ||
        productCategoryList.includes(productNameInput)
      ) {
        return element;
      }
    });
    setProductsFilter(productsFilter);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const addProductCart = (productId: number) => {
    const addContProducts = products.map((element) => {
      return { ...element, qtd: 0 };
    });

    const productFind = addContProducts.find(
      (element) => element.id === productId
    );

    const productCart = currentSale.find((element) => element.id === productId);

    if (!productCart && productFind !== undefined) {
      productFind.qtd = 1;
      setCurrentSale([...currentSale, productFind]);
    } else {
      toast.error(
        "Ops! O produto já foi selecionado. Altere a quantidade no carrinho"
      );
    }
  };

  const addQtdProductCart = (productId: number) => {
    const productFind = currentSale.find((element) => element.id === productId);

    if (productFind !== undefined && productFind.qtd !== undefined) {
      productFind.qtd++;
      setCurrentSale([...currentSale]);
    }
  };

  const removeQtdProductCart = (productId: number) => {
    const productFind = currentSale.find((element) => element.id === productId);

    if (
      productFind !== undefined &&
      productFind.qtd !== undefined &&
      productFind.qtd > 1
    ) {
      productFind.qtd--;
      setCurrentSale([...currentSale]);
    }
  };

  const removeProductCart = (productId: number) => {
    const productsCartFilter = currentSale.filter((element) => {
      if (element.id !== productId) {
        return element;
      }
    });
    setCurrentSale(productsCartFilter);
  };

  const removeAllProductsCart = () => {
    setCurrentSale([]);
  };

  const total = () => {
    const prices = currentSale.map((element) => element.price * element.qtd);

    const totalPrice = prices.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    return totalPrice;
  };

  const totalQtd = () => {
    const quant = currentSale.map((element) => element.qtd);

    const totalQuant = quant.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    return totalQuant;
  };

  return (
    <CartContext.Provider
      value={{
        showProducts,
        filteredProducts,
        setFilteredProducts,
        productsFilter,
        products,
        addProductCart,
        currentSale,
        removeProductCart,
        removeAllProductsCart,
        total,
        logout,
        openModalCart,
        setOpenModalCart,
        addQtdProductCart,
        openInputSearch,
        setOpenInputSearch,
        removeQtdProductCart,
        totalQtd,
      }}
    >
      <Outlet />
    </CartContext.Provider>
  );
};
