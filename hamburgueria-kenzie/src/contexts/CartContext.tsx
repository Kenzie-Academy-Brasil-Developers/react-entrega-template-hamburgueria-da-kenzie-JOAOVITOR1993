import { createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface iCartContext {
  showProducts: (inputValue: string, event: React.FormEvent<HTMLFormElement>) => void
  filteredProducts: string;
  setFilteredProducts: React.Dispatch<React.SetStateAction<string>>;
  productsFilter: iProducts[];
  products: iProducts[];
  handleClick: (productId: number) => void
  currentSale: iProducts[];
  removeProductCart:  (productId: number) => void;
  removeAllProductsCart: () => void;
  total: () => number;
  logout: () => void
}

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = () => {
  const [products, setProducts] = useState([] as iProducts[]);
  const [productsFilter, setProductsFilter] = useState([] as iProducts[]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState([] as iProducts[]);
  const navigate = useNavigate()

  
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
  
  const showProducts = (inputValue: string, event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const productsFilter = products.filter((element) => {   
      const productNameList = element.name.toLowerCase();
      const productNameInput = inputValue.toLowerCase();
      const productCategoryList = element.category.toLowerCase();

      if (productNameList.includes(productNameInput) || productCategoryList.includes(productNameInput)) {
        return element;
      }
    });
    setProductsFilter(productsFilter);
  };


  const logout = () =>{
    localStorage.clear()
    navigate("/login")
  }

  const handleClick = (productId: number) => {
    const productFind = products.find((element) => {
      if (element.id === productId) {
        return element;
      }
    });

    const productCart = currentSale.find((element) => {
      if (element.id === productId) {
        return element;
      }
    });
  
    if (!productCart) {
      setCurrentSale([...currentSale, productFind]);
    } else {
      toast.error("Ops! O produto já foi selecionado");
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
    const prices = currentSale.map((element) => {
      return element.price;
    });

    const totalPrice = prices.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        showProducts,
        filteredProducts,
        setFilteredProducts,
        productsFilter,
        products,
        handleClick,
        currentSale,
        removeProductCart,
        removeAllProductsCart,
        total,
        logout
      }}
    >
      <Outlet />
    </CartContext.Provider>
  );
};
