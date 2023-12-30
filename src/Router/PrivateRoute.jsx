import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const {pathname} = useLocation()
    if (loading) {
        return <p>Loading...</p>
    }
    if (!user) {
        return <Navigate state={pathname} to="/login"></Navigate>;
    }

    return children;

};

export default PrivateRoute;