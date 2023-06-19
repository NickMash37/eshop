import { Login } from '../../components/Login/Login';
import './LoginPage.css';

export const LoginPage = () => {
    return (
        <div>
            <Login />
            <div className='to-register'>Нет аккаунта? <a href='/register' className='reg-link'>Зарегистрируйтесь здесь!</a></div>
        </div>
    )
}