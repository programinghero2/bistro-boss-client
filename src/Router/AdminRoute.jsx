import { useContext } from "react";
import useAdmin from "../components/Shared/Hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
    const [isAdmin,isAdmingLoading] = useAdmin()
    const {user,loading} = useContext(AuthContext)
    const {pathname} = useLocation()
    if(loading || isAdmingLoading){
        return <p>Loading...</p>
    }
    if(user && isAdmin){
        return children
    }

    return <Navigate to="/login" state={pathname}></Navigate>
};

export default AdminRoute;