import React from 'react';
const Reg=()=>{

const [name, setName] = React.useState('');
const [username, setUsername] = React.useState('');
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [isMan, setIsMan] = React.useState(false);
const [age, setAge] = React.useState(0);

const hendleSubmit=(e)=>{
e.preventDefault();
if (isMan){
    setIsMan(!isMan)
}else{
    setIsMan(!isMan)
}
post()
}
// lexa123@mail.ru
// Lexa_redev123
// Egor_redev123
const post =async()=>{
const res = await fetch("https://first-node-js-app-r.herokuapp.com/api/users/register",
{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        name: name,
        username: username,
        email:email,
        password:password,
        isMan:true,
        age:parseInt(age),
    }),
}
)
const data = await res.json()
console.log(data)
}
return(
<div>
<form onSubmit={()=>hendleSubmit()}>
<div>
    <lable htmlFor='name'>Введите имя</lable>
    <input name='name' type='text' value={name} onChange={(e)=>setName(e.target.value)}></input> 
</div>
<div>
    <lable htmlFor='username'>Придумайте ник-нейм</lable>
    <input name='username' type='text' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
</div>
<div>
    <lable htmlFor='email'>Введите свою почту</lable>
    <input name='email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
</div>
<div>
    <lable htmlFor='password'>Придумайте пароль</lable>
    <input name='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
</div>
<div>
    <lable htmlFor='isMen'>Введите пол</lable>
    <input name='isMen' type='checkbox' value={isMan} onChange={(e)=>setIsMan(e.target.value)}></input>
</div>
<div>
    <lable htmlFor='age'>Введите возраст</lable>
    <input name='age' type='number'  value={age} onChange={(e)=>setAge(e.target.value)}></input>
</div>
<button onClick={(e)=>hendleSubmit(e)}>отправить</button>
</form>
</div>
)
}
export default Reg;