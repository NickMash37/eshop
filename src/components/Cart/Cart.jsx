import { BiCartAlt } from 'react-icons/bi';
import { CartMenu } from '../CartMenu/CartMenu';
import './Cart.css';
import { useSelector } from 'react-redux';
import { OrdersInCart } from '../OrdersInCart/OrdersInCart';

export const Cart = () => {
    const items = useSelector(state => state.cart.itemsInCart); 

    return (
        <div className='cart'>
            <OrdersInCart quantity={items.length}/>
            <BiCartAlt size={25} className='cart-icon' />
            <CartMenu items={ items } onClick={() => null}/>
        </div>
    )
}