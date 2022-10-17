import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Reg from './reg/reg';
import Log from './login/log';
import Todo from './todo/Todo';
import PrivateRoute from './HOC/PrivateRoute';


function App() {


  return (
    <div>

      <span> <Link to="/Reg"> Reg</Link></span>
      <span> <Link to="/Log"> Log</Link></span>
      {/* <span> <Link to="/"> Todo</Link></span> */}

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />
        <Route path="/log" element={<Log />} />
        <Route path="/Reg" element={<Reg />} />
      </Routes>


    </div>
  );
}

export default App;
