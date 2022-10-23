import React from 'react';
import GetTodo from '../GetTodo/GetTodo';
import { Link } from 'react-router-dom'
import './Todo.css';

const Todo = () => {

    const accessToken = localStorage.getItem('token')
    const [text, setText] = React.useState('');

    const hendleSubmit = (e) => {
        e.preventDefault();
        postText()
    }

    const postText = async () => {
        const res = await fetch('https://first-node-js-app-r.herokuapp.com/api/todos',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    "title": text
                }),
            }
        )
        const data = await res.json()
        console.log(data)
    }

    return (
        <div>
            <div className='link'> <Link to="Menu" className='linkMenu'> Menu</Link></div>
            <div className='content'>
                <form onSubmit={() => hendleSubmit()}>
                    <div className='submitForm'>
                        <input name='todo' placeholder='Введите текст' type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
                        <button onClick={(e) => hendleSubmit(e)}>добавить</button>
                    </div>
                </form>
                <GetTodo/>
            </div>
        </div>
    )
}
export default Todo;