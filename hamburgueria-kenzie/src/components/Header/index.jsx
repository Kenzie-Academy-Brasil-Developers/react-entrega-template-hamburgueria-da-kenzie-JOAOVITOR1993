import logo from "../../../src/img/logo.svg";
import { Button } from "../Button";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./styles";

export const Header = ({
  showProducts,
  filteredProducts,
  setFilteredProducts,
}) => {
  return (
    <StyledHeader>
      <div className="container">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <div className="divForm">
          <form
            onSubmit={(event) =>
              event.preventDefault(showProducts(filteredProducts))
            }
          >
            <InputSearch
              type={"text"}
              placeholder={"Digitar Pesquisa"}
              onChange={(event) => setFilteredProducts(event.target.value)}
            />
            <Button type={"submit"} name={"Pesquisar"} />
          </form>
        </div>
      </div>
    </StyledHeader>
  );
};
