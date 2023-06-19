import './Header.css';
import {Cart} from '../Cart/Cart';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/user/userSlice';
import { useAuth } from '../../hooks/use-auth';

export const Header = () => {
    const dispatch = useDispatch()
    const {email} = useAuth()
    return (
        <div className="header">
            <div className='header-title'><a href="/">E-SHOP</a></div>
            <div className='header-panel'>
                <Cart />
                <div className='logout-btn'>
                    <button onClick={() => dispatch(removeUser())}>
                    Выйти из {email}
                    </button></div>
            </div>
        </div>
    )
}