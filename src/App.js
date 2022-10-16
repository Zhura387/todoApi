import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Reg from './reg/reg';
import Log from './login/log';
import Todo from './todo/Todo';
import PrivateRoute from './privat/PrivateRoute';

function App() {

    const ls= ()=>{
    const a= localStorage.getItem('token')
    if(a){
      return true
    }else{
      return false
    }
  }
  console.log(ls())

  return (
    <div>

      <span> <Link to="/Reg"> Reg</Link></span>
      <span> <Link to="/Log"> Log</Link></span>
      <span> <Link to="/"> Todo</Link></span>

      <Routes>
        <Route element={<PrivateRoute ls={ls}/>} >   
        <Route path="/" element={<Todo/>} />
        </Route>
           {/* <Route path="/" element={<Todo />} /> */}
        <Route path="/log" element={<Log />} />
        <Route path="/Reg" element={<Reg />} />
      </Routes>

    </div>
  );
}

export default App;
