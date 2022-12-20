import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "../Button";
import { StyledCart } from "./styles";

export const CartTotal = () => {
  const { removeAllProductsCart, total } = useContext(CartContext);

  return (
    <StyledCart>
      <div>
        <p>Total</p>
        <p>R$ {total().toFixed(2)}</p>
      </div>
      <Button
        type={"button"}
        name={"Remover Todos"}
        onClick={() => removeAllProductsCart()}
      />
    </StyledCart>
  );
};
