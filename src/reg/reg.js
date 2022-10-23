import React from 'react';
import './Reg.css'
const Reg = () => {

    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isMan, setIsMan] = React.useState(false);
    const [age, setAge] = React.useState(0);

    const hendleSubmit = (e) => {
        e.preventDefault();
        if (isMan) {
            setIsMan(!isMan)
        } else {
            setIsMan(!isMan)
        }
        post()
    }
    // lexa123@mail.ru
    // Lexa_redev123
    // Egor_redev123
    const post = async () => {
        const res = await fetch("https://first-node-js-app-r.herokuapp.com/api/users/register",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    username: username,
                    email: email,
                    password: password,
                    isMan: true,
                    age: parseInt(age),
                }),
            }
        )
        const data = await res.json()
        console.log(data)
    }
    return (
        <div className='wrapperReg'>
            <div className='contentReg'>
                <p>Регистрация</p>
                <form onSubmit={() => hendleSubmit()} className='formReg'>
                    <div>
                        <input name='name' placeholder='Введите имя' type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <input name='username' placeholder='Придумайте ник-нейм' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div>
                        <input name='email' type='email' placeholder='Введите свою почту' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <input name='password' type='password' placeholder='Придумайте пароль' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <input name='isMen' type='checkbox' value={isMan} onChange={(e) => setIsMan(e.target.value)}></input>
                        <lable htmlFor='isMen'>если Вы жещина <br />поставте галочку</lable>
                    </div>
                    <div className='age'>
                        <input name='age' type='number' value={age} onChange={(e) => setAge(e.target.value)}></input>
                        <lable htmlFor='age'>Укажите возраст</lable>
                    </div>
                    <button onClick={(e) => hendleSubmit(e)}>отправить</button>
                </form>
            </div>
        </div>
    )
}
export default Reg;