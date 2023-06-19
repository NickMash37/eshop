import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../CartMenu/CartMenu";
import "./Cart.css";
import { useSelector } from "react-redux";
import { OrdersInCart } from "../OrdersInCart/OrdersInCart";
import { useNavigate } from "react-router";
import { useState } from "react";

export const Cart = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.itemsInCart);
  const handleOrderClick = () => {
    return navigate("/order");
  };

  return (
    <div className="cart">
      <OrdersInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        style={{cursor: 'pointer'}}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {
        isCartMenuVisible && <CartMenu items={items} onClick={handleOrderClick} />
      }
     
    </div>
  );
};
