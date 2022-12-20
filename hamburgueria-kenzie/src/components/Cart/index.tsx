import { CartTotal } from "../CartTotal";
import { StyledCart, StyledCartProduct } from "./styles";
import menssageNoProducts from "../../../src/img/menssageNoProducts.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "../Button";

export const Cart = () => {
  const {
    currentSale,
    removeProductCart,
    setOpenModalCart,
    addQtdProductCart,
    removeQtdProductCart,
  } = useContext(CartContext);

  return (
    <StyledCart>
      <div className="divHeader">
        <h2>Carrinho de compras</h2>
        <Button
          type={"button"}
          name={"X"}
          onClick={() => setOpenModalCart(false)}
        />
      </div>
      <ul>
        {currentSale.length !== 0 ? (
          currentSale.map((element, index) => {
            const { id, name, img, qtd } = element;
            return (
              <StyledCartProduct key={index}>
                <div>
                  <figure>
                    <img src={img} alt={name} />
                  </figure>
                  <div>
                    <h3>{name}</h3>
                    <div className="counterProduct">
                      <button onClick={() => removeQtdProductCart(id)}>
                        -
                      </button>
                      <p>{qtd}</p>
                      <button onClick={() => addQtdProductCart(id)}>+</button>
                    </div>
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
      {currentSale.length !== 0 && <CartTotal />}
    </StyledCart>
  );
};
