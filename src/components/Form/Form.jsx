import './Form.css';
import { useState } from 'react';

export const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Пароль'></input>
            <button onClick={() => handleClick(email, pass)}>{title}</button>
        </div>
    )
}