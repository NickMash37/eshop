import './CartItem.css';

export const CartItem = ({ title, key, id, price, img }) => {
    return (
        <div className='cart-item'>
            <span>{title}</span>
            <div className="cart-item__price">
                <span>{price} руб.</span>
            </div>
        </div>
    )
}