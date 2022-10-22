import Log from '../login/log'
import Reg from '../reg/reg'
import { Routes, Route, Link } from 'react-router-dom'
import './menu.css';

const Menu = () => {
  return (
    <div>
      <header className='menuHeader'>
        <div className='linkTodo'>
          <span> <Link to="/" > Todo</Link></span>
        </div>
        <div>
          <span> <Link to="Reg" > Reg</Link></span>
          <span> <Link to="Log" className='linkLog'> Log</Link></span>
        </div>
      </header>
      <Routes>
        <Route path='Reg' element={<Reg />}></Route>
        <Route path='Log' element={<Log />}></Route>
      </Routes>
    </div>
  )
}
export default Menu