import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import usePaymentIntent from "../../../components/Shared/Hooks/usePaymentIntent";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_METHOD_KEY);
const Payment = () => {
    const [clientSecret] = usePaymentIntent()
    return (
        <div>
            <SectionTitle subHeading="please pay and get your product" heading="Pay now"></SectionTitle>
            {
                clientSecret && <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            }
        </div>
    );
};

export default Payment;