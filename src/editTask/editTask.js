import React from 'react';

const EditTask = ({ item, accessToken }) => {
    const [isEdit, setIsEdit] = React.useState(false)
    const [text, setText] = React.useState(item.title)


    const toggle = (item) => {
        if (isEdit) {
            //     handleEdit(item.id, text)
            setIsEdit(!isEdit)
        } else {
            setIsEdit(!isEdit)
        }
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
            {isEdit ? (<input className='input-edit' onChange={(e) => setText(e.target.value)} value={text} />) : (<p className='task'>{item.title}</p>)}
            <button onClick={() => toggle(item)}>{isEdit ? 'save' : 'ed'}</button>
        </div>
    )
}

export default EditTask;