import React from 'react';

const Checked = ({ item }) => {

    const accessToken = localStorage.getItem('token')

    const check = (item) => {
        patchCheck(item)
    }
    const patchCheck = async (item) => {
        const res = await fetch(`https://first-node-js-app-r.herokuapp.com/api/todos/${item.ID}/isCompleted`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            }
        )
        const dataCheck = await res.json()
        console.log(dataCheck)
    }

    return (
        <div>
            <input onClick={() => check(item)} type='checkbox'></input>
        </div>
    )
}
export default Checked;