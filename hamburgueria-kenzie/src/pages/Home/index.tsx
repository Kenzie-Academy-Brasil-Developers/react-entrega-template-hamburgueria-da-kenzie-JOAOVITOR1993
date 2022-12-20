import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ModalCart } from "../../components/AddModal/ModalCart";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { StyleDivApp } from "../../styles/styleDivApp";

export const Home = () => {
  const { userLogin, loading } = useContext(UserContext);
  const { openModalCart } = useContext(CartContext);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return userLogin ? (
    <>
      <Header />
      <StyleDivApp className="container">
        <ProductsList />
        {openModalCart && <ModalCart />}
      </StyleDivApp>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};
