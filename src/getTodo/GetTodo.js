import React from 'react';
import EditTask from '../editTask/editTask';
import Checked from '../checked/Checked';
import './getTodo.css';

const GetTodo = ({ accessToken, handleDelete }) => {
    const [todos, setTodos] = React.useState([])


    // const OtherScotchy = React.memo(props => {
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
    // })
    return (
        <div>
            {todos.map((item) => (
                <div key={item.ID} className="task">
                    <div className="taskText">
                        <EditTask
                            item={item}
                            accessToken={accessToken}
                        />
                    </div>
                    <div className="taskDelete">
                        <button className="delete" onClick={() => handleDelete(item)}>delete</button>
                        <Checked
                            item={item}
                            accessToken={accessToken}
                        />
                    </div>
                </div>
            ))}</div>
    )
}
export default GetTodo;