import React from 'react';
import EditTask from '../editTask/editTask';
import Checked from '../checked/Checked';

const Todo = () => {
    const accessToken = localStorage.getItem('token')
    const [todos, setTodos] = React.useState([])
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

    React.useEffect(() => {
        fetch('https://first-node-js-app-r.herokuapp.com/api/todos',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        )
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setTodos(json)
            })
    }, [])
    console.log(todos)

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

    return (
        <div>
            <form onSubmit={() => hendleSubmit()}>
                <div>
                    <lable htmlFor='todo'>Введите текст</lable>
                    <input name='todo' type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
                <button onClick={(e) => hendleSubmit(e)}>отправить</button>
            </form>

            <div className='todos'>
                {todos.map((item) => (
                    <div key={item.id} className='task'>
                        {/* <p>{item.title}</p> */}
                        <EditTask
                            item={item}
                            accessToken={accessToken}
                        />
                        <button onClick={() => handleDelete(item)}>delete</button>
                        <Checked
                            item={item}
                            accessToken={accessToken}
                        />
                    </div>
                ))}</div>

        </div>
    )
}
export default Todo;