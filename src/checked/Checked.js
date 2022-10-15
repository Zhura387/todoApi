import React from 'react';

const Checked =({item,accessToken})=>{

const check=(item)=>{
    pre(item)
}
    const pre =async(item)=>{
      const res = await fetch(`https://first-node-js-app-r.herokuapp.com/api/todos/${item.ID}/isCompleted`,
      {
          method:'PATCH',
          headers:{
              'Content-Type':'application/json',
              'Authorization': `Bearer ${accessToken}`,
          }
      }
      )
      const r = await res.json()
      console.log(r)
      }



return(
<div>
<input onClick={()=>check(item)} type='checkbox'></input>
</div>
)
}
export default Checked;