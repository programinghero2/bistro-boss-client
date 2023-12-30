import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const useAdmin = () => {
    const axiosSecure = useAxios()
    const { user, loading } = useContext(AuthContext)
    const { data: isAdmin, isPending: isAdmingLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            if (loading) {
                return <p>Loading...</p>
            }
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin, isAdmingLoading]
};

export default useAdmin;