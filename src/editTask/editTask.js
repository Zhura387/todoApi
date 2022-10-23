import React from 'react';
import './Edit.css';

const EditTask = ({ item }) => {
    const [isEdit, setIsEdit] = React.useState(false)
    const [text, setText] = React.useState(item.title)
    const accessToken = localStorage.getItem('token')

    const toggle = () => {
        if (isEdit) {
            //     handleEdit(item.id, text)
            setIsEdit(!isEdit)
        } else {
            setIsEdit(!isEdit)
        }
    }

    const change=()=>{
        save(item)
    }

    const save = async (item) => {
        const res = await fetch(`https://first-node-js-app-r.herokuapp.com/api/todos/${item.ID}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    "title": text,
                }),
            }
        )
        const s = await res.json()
        console.log(s)
    }

    return (
        <div className='task-place'>
            {isEdit ? (<input className='input-edit' onChange={(e) => setText(e.target.value)} value={text} />) : (<p className='title'>{item.title}</p>)}
            <button onClick={() => toggle()}>{isEdit ? <button onClick={() => change(item)}>сохранить</button> : 'изменить'} </button>
        </div>
    )
}

export default EditTask;