import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const instance = axios.create({
    baseURL: "http://localhost:5000"
})
const useAxios = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    instance.interceptors.request.use(config => {
        const token = localStorage.getItem("access-token")
        config.headers.authorization = `Bearer ${token}`
        return config
    }, error => {
        return Promise.reject(error);
    }
    )
    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response.status;
        if(status === 401 || status === 403){
            logOut()
            navigate("/login")
        }
        console.log(error)
        return Promise.reject(error);
    });
    return instance
};

export default useAxios;