import { useState, useEffect } from "react";
import { api } from "./services/api";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Header } from "./components/Header";
import { StyleDivApp } from "./styles/styleDivApp";

const App = () => {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const showProducts = (inputValue) => {
    const productsFilter = products.filter((element) => {
      const productNameList = element.name.toLowerCase();
      const productNameInput = inputValue.toLowerCase();
      const productCategoryList = element.category.toLowerCase();

      if (
        productNameList === productNameInput ||
        productCategoryList === productNameInput
      ) {
        return element;
      }
    });
    setProductsFilter(productsFilter);
  };

  const handleClick = (productId) => {
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
      showMenssageError();
    }
  };

  const showMenssageError = () => {
    toast.error("Ops! O produto já foi selecionado");
  };

  const removeProductCart = (productId) => {
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

  return (
    <div className="App">
      <Header
        showProducts={showProducts}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <StyleDivApp className="container">
        <ProductsList
          productsFilter={productsFilter}
          products={products}
          handleClick={handleClick}
        />
        <Cart
          currentSale={currentSale}
          removeProductCart={removeProductCart}
          removeAllProductsCart={removeAllProductsCart}
        />
      </StyleDivApp>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;
