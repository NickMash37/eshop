import './OrdersInCart.css';

export const OrdersInCart = ({ quantity = 0 }) => {
    return quantity > 0 ? (
        <div className="orders-in-cart">
            { quantity }
        </div>
    ) : null
}