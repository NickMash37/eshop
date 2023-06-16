import { BiCartAlt } from 'react-icons/bi';
import { CartMenu } from '../CartMenu/CartMenu';
import { calcTotalPrice } from '../utils';
import './Cart.css';
import { useSelector } from 'react-redux';
import { OrdersInCart } from '../OrdersInCart/OrdersInCart';

export const Cart = () => {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items)
    return (
        <div className='cart'>
            <OrdersInCart quantity={items.length}/>
            <BiCartAlt size={25} className='cart-icon'/>
            <CartMenu items={ items } onClick={() => null}/>
        </div>
    )
}