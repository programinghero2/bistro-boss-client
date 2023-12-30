import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../../components/Shared/Hooks/useAxios";
import toast from "react-hot-toast";
import useCart from "../../../components/Shared/Hooks/useCart";

const OrderFoodCard = ({ food }) => {
    const { name, recipe, price, image,_id} = food
    const [,refetch] = useCart()
    const { user } = useContext(AuthContext)
    const {pathname} = useLocation()
    const axiosSecure = useAxios()
    const navigate = useNavigate()
    const AddItemToCart = () => {
        const cartItem = {
            menuId:_id,
            email:user?.email,
            name,
            image,
            price
        }
        if (user?.email) {
            axiosSecure.post("/carts",cartItem)
            .then((result) =>{
                if(result.data.insertedId){
                    toast.success("product cart successfully")
                    refetch()
                }
            })
            .catch(error =>{
                console.log(error)
            })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login",{state:pathname})
                }
            });
        }
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt="food" /></figure>
                <span className="bg-slate-700 text-white px-3 absolute right-5 top-3">${price}</span>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => AddItemToCart(food)} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderFoodCard;