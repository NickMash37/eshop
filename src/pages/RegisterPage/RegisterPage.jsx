import './RegisterPage.css';
import { SignUp } from '../../components/SignUp/SignUp';

export const RegisterPage = () => {
    return (
        <div>
            <SignUp />
            <div className='to-login'>Уже зарегистрированы? <a href="/login" className='login-link'>Войти</a></div>
        </div>
    )
}