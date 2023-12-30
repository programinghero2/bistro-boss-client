import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../components/Shared/Hooks/useMenu";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import useAxios from "../../../components/Shared/Hooks/useAxios";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageItem = () => {
    const { menu, refetch } = useMenu()
    const axiosSecure = useAxios()
    const hanleMenuDelete = (id) => {
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
                axiosSecure.delete(`/menu/${id}`)
                    .then(() => {
                        toast.success("item delete successfully")
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
            <SectionTitle subHeading="Hurry Up!" heading="Manage All Items"></SectionTitle>
            <div>
                <p>Totla Item:{menu?.length}</p>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu?.map((item, index) => {
                                    return <tr key={item._id}>
                                        <th>
                                            {index + 1}
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
                                            <p>{item?.name}</p>
                                        </td>
                                        <td>${item?.price}</td>
                                        <th>
                                            <Link to={`/dashboard/updateItem/${item?._id}`}><button className="btn btn-ghost text-base bg-[#D1A054] hover:bg-[#D1A054] text-white"><FaEdit></FaEdit></button></Link>
                                        </th>
                                        <th>
                                            <button onClick={() => hanleMenuDelete(item?._id)} className="btn bg-red-600 text-white text-base hover:bg-red-800 "><FaTrashAlt></FaTrashAlt></button>
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

export default ManageItem;