import { Button } from "../Button";
import { StyledCart } from "./styles";

export const CartTotal = ({ currentSale }) => {
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
    <StyledCart>
      <div>
        <p>Total</p>
        <p>R$ {total().toFixed(2)}</p>
      </div>
      <Button
        type={"button"}
        name={"Remover Todos"}
        onClick={() => console.log("função remover todos")}
      />
    </StyledCart>
  );
};
