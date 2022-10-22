import React from 'react';
import GetTodo from '../getTodo/GetTodo';
import { Link } from 'react-router-dom'
import './todo.css';

const Todo = () => {


    const accessToken = localStorage.getItem('token')
    const [text, setText] = React.useState('');


    const hendleSubmit = (e) => {
        e.preventDefault();
        post()
    }

    const post = async () => {
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



    const handleDelete = async (item) => {
        const res = await fetch(`https://first-node-js-app-r.herokuapp.com/api/todos/${item.ID}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        )
        const data = await res.json()
        console.log(data)
    }
    // Export default React.memo(Task)
    // const MyScotchyComponent = React.memo(function MyComponent(props) {
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

                <GetTodo
                    accessToken={accessToken}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    )
}
export default Todo;