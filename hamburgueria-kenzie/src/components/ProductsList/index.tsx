import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "../Button";
import { StyledProduct, StyledProductList } from "./styles";

export const ProductsList = () => {
  const { productsFilter, products, handleClick } = useContext(CartContext);

  return (
    <StyledProductList>
      {productsFilter.length !== 0
        ? productsFilter.map((element) => {
            const { id, name, category, price, img } = element;
            return (
              <StyledProduct key={id}>
                <figure>
                  <img src={img} alt={name} />
                </figure>
                <div>
                  <h2>{name}</h2>
                  <p>{category}</p>
                  <p>R$ {price.toFixed(2)}</p>
                  <Button
                    type={"button"}
                    name={"Adicionar"}
                    onClick={() => handleClick(id)}
                  />
                </div>
              </StyledProduct>
            );
          })
        : products.map((element) => {
            const { id, name, category, price, img } = element;
            return (
              <StyledProduct key={id}>
                <figure>
                  <img src={img} alt={name} />
                </figure>
                <div>
                  <h2>{name}</h2>
                  <p>{category}</p>
                  <p>R$ {price.toFixed(2)}</p>
                  <Button
                    type={"button"}
                    name={"Adicionar"}
                    onClick={() => handleClick(id)}
                  />
                </div>
              </StyledProduct>
            );
          })}
    </StyledProductList>
  );
};
