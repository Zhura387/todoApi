import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = ({ls}) => {


  return(ls?<Outlet/>:<Navigate to={"/log"}/>)

}
export default PrivateRoute;
