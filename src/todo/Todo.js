import React from 'react';
import GetTodo from '../getTodo/GetTodo';
import { Link } from 'react-router-dom'

const Todo = () => {


    const accessToken = localStorage.getItem('token')
    // const [todos, setTodos] = React.useState([])
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

<span> <Link to="Menu"> Menu</Link></span> 

            <form onSubmit={() => hendleSubmit()}>
                <div className='submitForm'>
                    <lable htmlFor='todo'>Введите текст</lable>
                    <input name='todo' type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
                <button onClick={(e) => hendleSubmit(e)}>отправить</button>
                </div>
            </form>

            <GetTodo
                accessToken={accessToken}
                handleDelete={handleDelete}
            />
        </div>

    )
}
export default Todo;