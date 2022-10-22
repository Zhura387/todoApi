import Log from '../login/log' 
import Reg from '../reg/reg'
import { Routes, Route, Link } from 'react-router-dom'

const Menu=()=>{
return(
    <div>
               <span> <Link to="Reg"> Reg</Link></span>
      <span> <Link to="Log"> Log</Link></span> 
       <span> <Link to="/"> Todo</Link></span> 
      
        <Routes>
        <Route path='Reg' element={<Reg/>}></Route>
         <Route path='Log' element={<Log/>}></Route>
      </Routes>
    </div>
)
}
export default Menu