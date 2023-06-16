import "./CartMenu.css";
import { Button } from "../Button/Button";
import { calcTotalPrice } from "../utils";
import { CartItem } from "../CartItem/CartItem";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__products-list">
        {items.length > 0
          ? items.map((product) => (
              <CartItem
                key={product.name}
                image={product.img}
                price={product.price}
                title={product.name}
                id={product.id}
              />
            ))
          : "Корзина пуста"}
      </div>

      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого: {calcTotalPrice(items)} руб.</span>
          </div>
          <Button onClick={onClick}>Оформить заказ</Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
