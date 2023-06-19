import { Item } from '../Item/Item';
import './Categories.css';

export const Categories = ({ products }) => {
    const handleCategory = (event) => {
        if (event.target.checked === true) {
           return products = products.filter(product => <Item product={products} key={product.id}/>)
        } else return
    }
    
    return (
        <div className='categories-main'>
            <input type="checkbox" onChange={handleCategory}/>
        </div>
    )
}