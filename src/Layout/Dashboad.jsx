import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaHistory, FaHome, FaList, FaUsers, FaUtensils } from 'react-icons/fa';
import { FaBookBookmark, FaCalendar, FaUsersViewfinder } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import useAdmin from "../components/Shared/Hooks/useAdmin";
const Dashboad = () => {
    const [isAdmin] = useAdmin()
    // const isAdmin = true
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#d1a054] text-black">
                <ul className="menu space-y-2 text-base">
                    {
                        isAdmin ?
                            <>
                                <NavLink to="/dashboard/adminHome">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaHome></FaHome>
                                        <li>
                                            Admin Home
                                        </li>
                                    </div>
                                </NavLink>
                                <NavLink to="addItems">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaUtensils></FaUtensils>
                                        <li>
                                            Add Items
                                        </li>
                                    </div>
                                </NavLink>
                                <NavLink to="manageItems">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaList></FaList>
                                        <li>
                                            Manage Items
                                        </li>
                                    </div>
                                </NavLink>
                                <NavLink to="manageBookings">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaBookBookmark></FaBookBookmark>
                                        <li>
                                            Manage Bookings
                                        </li>
                                    </div>
                                </NavLink>
                                <NavLink to="allUsers">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaUsers></FaUsers>
                                        <li>
                                           All Users
                                        </li>
                                    </div>
                                </NavLink>
                            </> :
                            <>
                                <NavLink to="/dashboard/userHome">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaHome></FaHome>
                                        <li>
                                            User Home
                                        </li>
                                    </div>
                                </NavLink>
                                <NavLink to="reservation">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaCalendar></FaCalendar>
                                        <li>
                                            Reservation
                                        </li>
                                    </div>
                                </NavLink>
                                <NavLink to="/dashboard/paymentHistory">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaHistory></FaHistory>
                                        <li>
                                            Payment History
                                        </li>
                                    </div>
                                </NavLink>
                                <NavLink to="cart">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaCartPlus></FaCartPlus>
                                        <li>
                                            My Cart
                                        </li>
                                    </div>
                                </NavLink>
                                <NavLink to="addReview">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaUsersViewfinder></FaUsersViewfinder>
                                        <li>
                                            Add Review
                                        </li>
                                    </div>
                                </NavLink>
                                <NavLink to="myBooking">
                                    <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                                        <FaBookBookmark></FaBookBookmark>
                                        <li>
                                            My Booking
                                        </li>
                                    </div>
                                </NavLink>
                            </>
                    }
                    <div className="divider divider-neutral"></div>
                    <NavLink to="/">
                        <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                            <FaHome></FaHome>
                            <li>
                                Home
                            </li>
                        </div>
                    </NavLink>
                    <NavLink to="/menu">
                        <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                            <FiMenu></FiMenu>
                            <li>
                                Menu
                            </li>
                        </div>
                    </NavLink>
                    <NavLink to="/contact">
                        <div className="flex bg-blue-600 p-2 rounded gap-2 items-center">
                            <MdEmail></MdEmail>
                            <li>
                                Contact
                            </li>
                        </div>
                    </NavLink>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboad;