import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Todo from './todo/Todo';
import PrivateRoute from './HOC/PrivateRoute';
import Menu from './menu/menu';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />
        <Route path='Menu/*' element={<Menu />}></Route>
      </Routes>
    </div>
  );
}

export default App;
