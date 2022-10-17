import React from 'react';
import { useNavigate } from "react-router-dom";
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
        <div>
            <form onSubmit={() => hendleSubmit()}>

                <div>
                    <lable htmlFor='password'>Введите пароль</lable>
                    <input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <lable htmlFor='email'>Введите свою почту</lable>
                    <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <button onClick={(e) => hendleSubmit(e)}>отправить</button>
            </form>
        </div>
    )
}
export default Log;