import logo from "../../img/logo.svg";
import cart from "../../img/cart.svg";
import search from "../../img/search.svg";
import searchMobile from "../../img/searchMobile.svg";
import imgLogout from "../../img/logout.svg";
import { Button } from "../Button";
import { StyledHeader, StyledInputSearch } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Header = () => {
  const {
    showProducts,
    filteredProducts,
    setFilteredProducts,
    logout,
    setOpenModalCart,
    openInputSearch,
    setOpenInputSearch,
    totalQtd,
  } = useContext(CartContext);

  return (
    <StyledHeader>
      {openInputSearch && (
        <div className="divBackFormMobile">
          <div className="divFormMobile">
            <form onSubmit={(event) => showProducts(filteredProducts, event)}>
              <StyledInputSearch
                type={"text"}
                placeholder={"Digitar Pesquisa"}
                onChange={(event) => setFilteredProducts(event.target.value)}
                required
              />
              <button
                className="btnSearchMobile"
                type="submit"
                onClick={() => setOpenInputSearch(true)}
              >
                <figure>
                  <img src={searchMobile} alt="Search" />
                </figure>
              </button>
            </form>
          </div>
        </div>
      )}
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

          <button
            className="btnSearch"
            type="submit"
            onClick={() => setOpenInputSearch(true)}
          >
            <figure>
              <img src={search} alt="Search" />
            </figure>
          </button>

          <button
            className="btnCartQtd"
            type="submit"
            onClick={() => setOpenModalCart(true)}
          >
            <figure>
              <img src={cart} alt="Cart" />
            </figure>
            <p>{totalQtd()}</p>
          </button>

          <button type="submit" onClick={() => logout()}>
            <figure>
              <img src={imgLogout} alt="Logout" />
            </figure>
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};
