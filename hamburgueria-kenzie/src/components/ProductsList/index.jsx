import { Products } from "../Product";
import { StyledProductList } from "./styles";

export const ProductsList = ({ productsFilter, products, handleClick }) => {
  return (
    <StyledProductList>
      {productsFilter.length !== 0
        ? productsFilter.map((element) => {
            const { id, name, category, price, img } = element;
            return (
              <Products
                key={id}
                id={id}
                name={name}
                category={category}
                price={price}
                img={img}
                handleClick={handleClick}
              />
            );
          })
        : products.map((element) => {
            const { id, name, category, price, img } = element;
            return (
              <Products
                key={id}
                id={id}
                name={name}
                category={category}
                price={price}
                img={img}
                handleClick={handleClick}
              />
            );
          })}
    </StyledProductList>
  );
};
