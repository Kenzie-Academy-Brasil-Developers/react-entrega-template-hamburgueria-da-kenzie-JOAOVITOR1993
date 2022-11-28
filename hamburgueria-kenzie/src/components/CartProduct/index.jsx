import { Button } from "../Button";
import { StyledCartProduct } from "./styles";

export const CartProduct = ({
  index,
  id,
  name,
  category,
  img,
  removeProductCart,
}) => {
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
      <Button name={"Remover"} onClick={() => removeProductCart(id)} />
    </StyledCartProduct>
  );
};
