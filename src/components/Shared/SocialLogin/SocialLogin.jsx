import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {GoogleLogin} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleSocialLogin = () =>{
        GoogleLogin()
        .then(result =>{
            const userInfo = {
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post("/users",userInfo)
            .then(() =>{
                toast.success("Successfully Login")
                navigate("/")
            })
            .catch(error =>{
                toast.error(error.message)
            })
            
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <button onClick={handleSocialLogin} className="btn">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;