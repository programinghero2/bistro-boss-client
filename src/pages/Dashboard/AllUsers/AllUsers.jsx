import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../components/Shared/Hooks/useAxios";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {
    const axiosSecure = useAxios()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    const handleDelete = (user) => {
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
                axiosSecure.delete(`/users/${user?._id}`)
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
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user?._id}`)
            .then(res => {
                    toast.success(`${user?.name} is an admin now`)
                    refetch()
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div>
            <div className="pl-6 text-2xl font-medium">
                <p>All Users:{users?.length}</p>
            </div>
            <div>
                <div className="overflow-x-auto p-6">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => {
                                    return <tr key={user?._id}>
                                        <th>{index + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>
                                            {
                                                user.role === "admin" ? "Admin" :
                                                    <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#D1A054] hover:bg-[#D1A054]"><FaUsers className="text-xl text-white"></FaUsers></button>
                                            }
                                        </td>
                                        <td><button onClick={() => handleDelete(user)} className="btn"><FaTrash className="text-xl text-red-600"></FaTrash></button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default AllUsers;