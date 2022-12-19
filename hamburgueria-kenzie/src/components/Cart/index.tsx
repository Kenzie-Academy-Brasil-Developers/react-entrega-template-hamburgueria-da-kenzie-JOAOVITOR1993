import { CartTotal } from "../CartTotal";
import { StyledCart, StyledCartProduct } from "./styles";
import menssageNoProducts from "../../../src/img/menssageNoProducts.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "../Button";

export const Cart = () => {
  const { currentSale, removeProductCart } =
    useContext(CartContext);

  return (
    <StyledCart>
      <h2>Carrinho de compras</h2>
      <ul>
        {currentSale.length !== 0 ? (
          currentSale.map((element, index) => {
            const { id, name, category, img } = element;
            return (
              <StyledCartProduct key={index}>
                <div>
                  <figure>
                    <img src={img} alt={name} />
                  </figure>
                  <div>
                    <h3>{name}</h3>
                    <p>{category}</p>
                  </div>
                </div>
                <Button
                  type={"button"}
                  name={"Remover"}
                  onClick={() => removeProductCart(id)}
                />
              </StyledCartProduct>
            );
          })
        ) : (
          <figure>
            <img src={menssageNoProducts} alt="No products" />
          </figure>
        )}
      </ul>
      {currentSale.length !== 0 && (
        <CartTotal/>
      )}
    </StyledCart>
  );
};
