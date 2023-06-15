import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import './ItemBuy.css';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';

export const ItemBuy = ({ product }) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === product.id)

    const handleClick = (e) => {
        e.stopPropagation()
        if (isItemInCart) {
            dispatch(deleteItemFromCart(product.id))
        } else {
            dispatch(setItemInCart(product))
        }
    }
    return (
        <div className='item-buy'>
            <span className='item-buy__price'>{product.price} руб.</span>
            <Button onClick={ handleClick }>
                { isItemInCart ? 'Убрать товар' : 'В Корзину' }</Button>
        </div>
    )
}