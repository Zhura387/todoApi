import React from 'react';
const Log=()=>{



const [password, setPassword] = React.useState('');
const [email, setEmail] = React.useState('');


const hendleSubmit=(e)=>{
e.preventDefault();
post()
}

const post =async()=>{
const res = await fetch("https://first-node-js-app-r.herokuapp.com/api/auth/login",
{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
   
        password:password,
        email:email
    }),
}
)
const data = await res.json()
localStorage.setItem('token',data.token)
console.log(data)
}
return(
<div>
<form onSubmit={()=>hendleSubmit()}>

<div>
    <lable htmlFor='password'>Введите пароль</lable>
    <input name='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
</div>
<div>
    <lable htmlFor='email'>Введите свою почту</lable>
    <input name='email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
</div>
<button onClick={(e)=>hendleSubmit(e)}>отправить</button>
</form>
</div>
)
}
export default Log;