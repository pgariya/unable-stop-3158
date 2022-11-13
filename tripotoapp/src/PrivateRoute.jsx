import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function PrivateRoute({children}) {

let {status} = useContext(AuthContext);

if(!status){
    return <Navigate to='/login'></Navigate>
}
return children


}

export default PrivateRoute;
