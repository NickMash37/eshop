import './CartItem.css';
import { useDispatch } from 'react-redux';
import {deleteItemFromCart} from '../../redux/cart/reducer';
import {AiFillDelete} from 'react-icons/ai';

export const CartItem = ({ title, key, id, price }) => {
    const dispatch = useDispatch();
    console.log(price)

    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(id));
    };
    return (
        <div className='cart-item' id={id} key={key}>
            <span className='title'>{title}</span>
            <div className="cart-item__price">
                <span>{price} руб.</span>
            </div>
            <AiFillDelete size={25} onClick={handleDeleteClick} fill='tomato' style={{cursor: 'pointer'}}></AiFillDelete>
        </div>
    )
}