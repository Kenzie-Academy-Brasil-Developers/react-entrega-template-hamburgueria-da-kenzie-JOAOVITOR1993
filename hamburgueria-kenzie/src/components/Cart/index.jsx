import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";
import { StyledCart } from "./styles";
import menssageNoProducts from "../../../src/img/menssageNoProducts.svg";

export const Cart = ({ currentSale, removeProductCart, removeAllProductsCart }) => {
  return (
    <StyledCart>
      <h2>Carrinho de compras</h2>
      <ul>
        {currentSale.length !== 0 ? (
          currentSale.map((element, index) => {
            const { id, name, category, img } = element;
            return (
              <CartProduct
                key={index}
                id={id}
                name={name}
                category={category}
                img={img}
                removeProductCart={removeProductCart}
              />
            );
          })
        ) : (
          <figure>
            <img src={menssageNoProducts} alt="No products" />
          </figure>
        )}
      </ul>
      {currentSale.length !== 0 && <CartTotal currentSale={currentSale} removeAllProductsCart={removeAllProductsCart}/>}
    </StyledCart>
  );
};
