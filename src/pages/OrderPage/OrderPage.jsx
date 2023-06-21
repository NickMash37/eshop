import './OrderPage.css';
import { CartItem } from '../../components/CartItem/CartItem';
import { useSelector } from 'react-redux';


export const OrderPage = () => {   
    const items = useSelector(state => state.cart.itemsInCart)

    return (
        <div>
            {
                items.map((product) => (
                    <div className="orders">
                    <CartItem
                      key={product.id}
                      image={product.img}
                      price={product.price}
                      title={product.name}
                      id={product.id}
                    />
                    </div>
                  ))
                }
            <a href="/home"><button className='back-btn'>Назад</button></a>
        </div>
    )
}