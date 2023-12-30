import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const useCart = () => {
    const axiosSecure = useAxios()
    const { user } = useContext(AuthContext)
    const { data: cartsItem = [], refetch, isLoading } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    return [cartsItem, refetch, isLoading]
};

export default useCart;