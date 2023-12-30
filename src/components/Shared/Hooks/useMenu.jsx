import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    // const [menu, setMenu] = useState([])
    // const [loading,setLoading] = useState(true)
    const axiosPublic= useAxiosPublic()
    const {data:menu , isLoading,refetch} = useQuery({
        queryKey:["menu"],
        queryFn: async() =>{
            const res = await axiosPublic.get("/menu")
            return res.data
        }
    })
    return {menu,isLoading,refetch}
};

export default useMenu;