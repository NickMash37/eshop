import {Form} from '../Form/Form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/user/userSlice';
import { useNavigate } from 'react-router';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) =>  {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
      <Form 
        title="login"
        handleClick={handleLogin}
      />
  )
}