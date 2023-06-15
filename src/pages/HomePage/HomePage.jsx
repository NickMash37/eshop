import './HomePage.css';
import { Item } from '../../components/Item/Item';

const PRODUCTS = [
    {
      id: 0,
      name: "First",
      price: 1000,
    },

    {
      id: 1,
      name: "Second",
      price: 1200,
    },

    {
      id: 2,
      name: 'Third',
      price: 230
    }
  ];
export const HomePage = () => {

    return (
        <div className='home-page'>
            { PRODUCTS.map(product => <Item product={product} key={product.id}/>) }
        </div>
    )
}