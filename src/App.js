import React from 'react';
import './App.css';
import{Routes,Route,Link} from 'react-router-dom'
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

  return (
    <div>

    <span> <Link to="/Reg"> Reg</Link></span>
    <span> <Link to="/Log"> Log</Link></span>
    <span> <Link to="/"> Todo</Link></span>

    <Routes>
      <Route path="/log" element={<Log />} />
      <Route path="/Reg" element={<Reg />} />
      {/* <Route element={<PrivateRoute ls={ls}/>} >
<Route element={<Todo/>} path='/'>

      </Route> */}
      <Route
        path="/"
        element={
          <PrivateRoute ls={ls}>
            <Todo />
          </PrivateRoute>
        }
      />
    </Routes>
    </div>
  );
}

export default App;
