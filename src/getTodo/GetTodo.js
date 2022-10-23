import React from 'react';
import EditTask from '../EditTask/EditTask';
import Checked from '../Checked/Checked';
import './GetTodo.css';

const GetTodo = () => {
    const [todos, setTodos] = React.useState([])
    const accessToken = localStorage.getItem('token')

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
 
    return (
        <div>
            {todos.map((item) => (
                <div key={item.ID} className="task">
                    <div className="taskText">
                        <EditTask
                            item={item}
                            
                        />
                    </div>
                    <div className="taskDelete">
                        <button className="delete" onClick={() => handleDelete(item)}>delete</button>
                        <Checked
                            item={item}
                           
                        />
                    </div>
                </div>
            ))}</div>
    )
}
export default GetTodo;