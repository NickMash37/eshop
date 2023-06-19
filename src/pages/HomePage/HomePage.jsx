import './HomePage.css';
import { Item } from '../../components/Item/Item';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router';


const PRODUCTS = [
    {
      id: 0,
      name: "Гибкая черепица",
      price: 1000,
      img: "/images/img1.jpg",
    },

    {
      id: 1,
      name: "ДВП",
      price: 1200,
      img: '/images/img2.jpg',
    },

    {
      id: 2,
      name: 'ДСП',
      price: 230,
      img: '/images/img3.jpg'
    },

    {
      id: 3,
      name: 'Картон асбестовый',
      price: 430,
      img: '/images/img4.jpg'
    },

    {
      id: 4,
      name: 'Клей для плитки',
      price: 560,
      img: '/images/img5.jpg'
    },

    {
      id: 5,
      name: 'Монолитный поликарбонат',
      price: 450,
      img: '/images/img6.jpg'
    },

    {
      id: 6,
      name: 'ОСП',
      price: 780,
      img: '/images/img7.jpg'
    },

    {
      id: 7,
      name: 'Рубероид',
      price: 1300,
      img: '/images/img8.jpg'
    },

    {
      id: 8,
      name: 'Сотовый поликарбонат',
      price: 1750,
      img: '/images/img9.jpg'
    },

    {
      id: 9,
      name: 'Термошайба',
      price: 950,
      img: '/images/img10.jpg'
    },

    {
      id: 10,
      name: 'Фанера',
      price: 1100,
      img: '/images/img11.jpg'
    },

    {
      id: 11,
      name: 'Цемент',
      price: 340,
      img: '/images/img12.jpg'
    },

    {
      id: 12,
      name: 'ЦСП',
      price: 270,
      img: '/images/img13.jpg'
    },

    {
      id: 13,
      name: 'Шифер волновой',
      price: 360,
      img: '/images/img14.jpg'
    },

    {
      id: 14,
      name: 'Шифер плоский',
      price: 60,
      img: '/images/img15.jpg'
    },

    {
      id: 15,
      name: 'Шпатлевка',
      price: 210,
      img: '/images/img16.jpg'
    },

    {
      id: 16,
      name: 'Штукатурка',
      price: 430,
      img: '/images/img17.jpg'
    }
  ];

export const HomePage = () => {
    const navigate = useNavigate()
    const {isAuth} = useAuth()

    console.log(isAuth)

    return isAuth ? (
        <div className='home-page'>
            { PRODUCTS.map(product => <Item product={product} key={product.id}/>) }
        </div>
    ) : navigate('/login')
}