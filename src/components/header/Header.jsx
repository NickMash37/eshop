import './Header.css';
import {Cart} from '../Cart/Cart';

export const Header = () => {
    return (
        <div className="header">
            <div className='header-title'>E-SHOP</div>
            <div className='header-panel'>
                <Cart />
            </div>
        </div>
    )
}