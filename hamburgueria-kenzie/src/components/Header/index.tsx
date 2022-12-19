import logo from "../../img/logo.svg";
import cart from "../../img/cart.svg";
import imgLogout from "../../img/logout.svg";
import { Button } from "../Button";
import { StyledHeader, StyledInputSearch } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export const Header = () => {
  const { showProducts, filteredProducts, setFilteredProducts, logout } = useContext(CartContext);

  return (
    <StyledHeader>
      <div className="container">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <div>
          <div className="divForm">
            <form onSubmit={(event) => showProducts(filteredProducts, event)}>
              <StyledInputSearch
                type={"text"}
                placeholder={"Digitar Pesquisa"}
                onChange={(event) => setFilteredProducts(event.target.value)}
                required
              />
              <Button type={"submit"} name={"Pesquisar"} />
            </form>
          </div>
          <button type="submit"><figure><img src={cart} alt="Cart" /></figure></button>
          <button type="submit" onClick={()=> logout()}><figure><img src={imgLogout} alt="Logout" /></figure></button>
        </div>
      </div>
    </StyledHeader>
  );
};
