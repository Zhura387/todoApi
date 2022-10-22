import React from 'react';
import { useNavigate } from "react-router-dom";
import './log.css'
const Log = () => {
    let navigate = useNavigate();



    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');


    const hendleSubmit = (e) => {
        e.preventDefault();
        post()
    }

    const post = async () => {
        try {
            const res = await fetch("https://first-node-js-app-r.herokuapp.com/api/auth/login",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        password: password,
                        email: email
                    }),
                }
            )
            const data = await res.json()
            console.log(data)
            if (!data.token) {
                throw new Error(data.message)
            } else {
                localStorage.setItem('token', data.token)
                navigate(`/`)
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div className='wrapperLog'>
            <div className='contentLog'>
                <p>Вход</p>
                <form onSubmit={() => hendleSubmit()} className='form'>
                    <div>
                        <input name='password' placeholder='Введите пароль' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <input name='email' placeholder='Введите свою почту' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <button onClick={(e) => hendleSubmit(e)}>Войти</button>
                </form>
            </div>
        </div>
    )
}
export default Log;