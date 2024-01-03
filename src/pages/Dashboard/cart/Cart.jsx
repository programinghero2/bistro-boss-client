import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../components/Shared/Hooks/useCart";
import useAxios from "../../../components/Shared/Hooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cartItem, refetch, isLoading] = useCart()
    // const [totalPrice, setTotalPrice] = useState(0)
    const axiosSecure = useAxios()
    if (isLoading) {
        return <p>Loading...</p>
    }
    const TotalPrice = cartItem.reduce((total, currentValue) => {
        return total + currentValue.price
    }, 0)
    const handleItemDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            }
        });
    }
    return (
        <div>
            <div className="text-lg font-bold flex items-center justify-evenly">
                <p>Total Order:{cartItem?.length}</p>
                <p>Total Price:{TotalPrice}</p>
                {
                    cartItem.length > 0 ? <Link to="/dashboard/payment"><button className=" btn bg-[#d1a054] hover:bg-[#e0a957] text-white">Pay</button></Link>:
                   <button disabled className=" btn bg-[#d1a054] hover:bg-[#e0a957] text-white">Pay</button>
                }
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        #
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItem?.map((item, index) => {
                                    return <tr key={item._id}>
                                        <th>
                                            <label>
                                                <p>{index + 1}</p>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="badge badge-ghost badge-sm">{item?.name}</p>
                                        </td>
                                        <td>${item?.price}</td>
                                        <th>
                                            <button onClick={() => handleItemDelete(item?._id)} className="btn btn-sm text-red-500"><FaTrashAlt></FaTrashAlt></button>
                                        </th>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;