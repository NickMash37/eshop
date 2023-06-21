import './SignUp.css';
import { Form } from '../Form/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router';


export const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) =>  {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }));
            navigate('/home')
          })
          .catch(console.error)
      }
    

    return (
      <div className='register'>
        <Form title="Зарегистрироваться" handleClick={handleRegister}/>
      </div>
    )
}