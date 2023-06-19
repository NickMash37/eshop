import { BiCartAlt } from 'react-icons/bi';
import { CartMenu } from '../CartMenu/CartMenu';
import './Cart.css';
import { useSelector } from 'react-redux';
import { OrdersInCart } from '../OrdersInCart/OrdersInCart';
import { useNavigate } from 'react-router';

export const Cart = () => {
    const navigate = useNavigate();
    const items = useSelector(state => state.cart.itemsInCart); 
    const handleOrderClick = () => {
        return navigate('/order')
    }

    return (
        <div className='cart'>
            <OrdersInCart quantity={items.length}/>
            <BiCartAlt size={25} className='cart-icon' />
            <CartMenu items={ items } onClick={handleOrderClick}/>
        </div>
    )
}