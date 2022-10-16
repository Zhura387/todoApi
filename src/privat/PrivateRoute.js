import { Outlet,Navigate } from "react-router-dom";



const PrivateRoute = ({ls}) => {


  return(ls()==='true'?<Outlet/>:<Navigate to='Log'/>)

}
export default PrivateRoute;
