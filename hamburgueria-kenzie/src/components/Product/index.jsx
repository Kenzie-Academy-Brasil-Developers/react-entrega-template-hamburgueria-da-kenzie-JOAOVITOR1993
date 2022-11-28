import { Button } from "../Button";
import { StyledProduct } from "./styles";

export const Products = ({ id, name, category, price, img, handleClick }) => {
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
};
