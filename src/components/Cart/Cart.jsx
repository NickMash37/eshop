import { Button } from '../Button/Button';
import { calcTotalPrice } from '../utils';
import './Cart.css';
import { useSelector } from 'react-redux';

export const Cart = () => {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items)
    return (
        <div className='cart'>
            <div className='cart-total'>
                {
                    items.map(product => product.name)
                }
            </div>
            {
                items.length > 0 ? 
                <div className='cart-menu__arrange'>
                    <div className='cart-menu__total-price'>
                        <span>Итого: {calcTotalPrice(items)} руб.</span>
                    </div>
                    <Button>Оформить заказ</Button>
                </div> : <div></div>
            }
        </div>
    )
}