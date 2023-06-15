import './Item.css';
import { ItemBuy } from '../ItemBuy/ItemBuy';

export const Item = ({ product }) => {
    return (
        <div className="item">
            <div className='item-details'>
                <span className='item-title'>{product.name}</span>
                <div className='item-buy'>
                    <ItemBuy product={product}/>
                </div>
            </div>
        </div>
    )
}