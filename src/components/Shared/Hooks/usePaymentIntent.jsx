import { useEffect, useState } from "react";
import useCart from "./useCart";
import useAxios from "./useAxios";

const usePaymentIntent = () => {
    const [cartItem] = useCart()
    const axiosSecret = useAxios()
    const [clientSecret, setClientSecret] = useState("")
    const TotalPrice = cartItem.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (TotalPrice > 0) {
            axiosSecret.post("/create-payment-intent", { price: TotalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    }, [axiosSecret, TotalPrice])
    return [clientSecret, TotalPrice, cartItem]
};

export default usePaymentIntent;