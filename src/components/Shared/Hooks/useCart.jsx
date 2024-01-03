import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const useCart = () => {
    const axiosSecure = useAxios()
    const { user,loading} = useContext(AuthContext)
    const { data: cartItem = [], refetch, isLoading } = useQuery({
        queryKey: ["cart"],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    return [cartItem, refetch, isLoading]
};

export default useCart;