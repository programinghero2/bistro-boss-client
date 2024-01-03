import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import usePaymentIntent from "../../../components/Shared/Hooks/usePaymentIntent";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../components/Shared/Hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecret = useAxios()
    const [error,setError] = useState(" ")
    const navigate = useNavigate()
    const [clientSecret,TotalPrice,cartItem] = usePaymentIntent()
    const {user} = useContext(AuthContext)
    const [transactionId,setTransactionId] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError(" ")
        }
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    name:user?.displayName,
                    email:user?.email
                }
            }
        })
        if(confirmError){
            console.log("confirm error",confirmError)
        }
        else{
            console.log("payment intent",paymentIntent)
            if(paymentIntent.status === "succeeded"){
                setTransactionId(paymentIntent.id)
                const payment = {
                    email:user?.email,
                    price:TotalPrice,
                    transactionId:paymentIntent.id,
                    date:new Date(),
                    cartIds:cartItem?.map(item => item?._id),
                    menuItemIds:cartItem?.map(item => item?.menuId),
                    status:"pending"
                }
                axiosSecret.post("/payments",payment)
                .then(res =>{
                    if(res.data?.paymentResult?.insertedId){
                        console.log(res.data)
                        toast.success("successfully payment")
                        navigate("/dashboard/paymentHistory")
                    }
                })
                .catch(error =>{
                    console.log(error.message)
                })
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-primary mt-3" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600 mt-2">{error}</p>
                {
                    transactionId && <p className="text-green-700 mt-3">{`Transaction_Id:${transactionId}`}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;