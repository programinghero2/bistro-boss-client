import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import useAxios from "../../../components/Shared/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosSecret = useAxios()
    const { data: paymentHistoryData } = useQuery({
        queryKey: ["payment", user?.email],
        queryFn: async () => {
            if (loading) {
                return <p>Loading...</p>
            }
            const res = await axiosSecret.get(`/payments?email=${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            <SectionTitle subHeading={`${user?.displayName} payment history`} heading="Payment History"></SectionTitle>
            <div>
                <p>{`Total payment ${paymentHistoryData?.length}`}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paymentHistoryData?.map((history,index) => {
                                return <tr key={history?._id}>
                                    <th>{index + 1}</th>
                                    <td>{history?.email}</td>
                                    <td>{history?.price}</td>
                                    <td>{history?.transactionId}</td>
                                    <td>{history?.status}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;