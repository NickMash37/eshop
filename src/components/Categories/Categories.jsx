import './Categories.css';
import { PRODUCTS } from '../../products';

export const Categories = ({ category, id }) => {
    const handleCategory = () => {
        console.log(PRODUCTS)
    }
    
    return (
        <div className='categories-main'>
            <label htmlFor="materials">{category}</label>
            <input type="checkbox" name='materials' onChange={handleCategory}/>
        </div>
    )
}