import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa6";
import useCart from "../Hooks/useCart";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cartsItem] = useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("logOut Successfully")
            })
    }
    const navLink = <>
        <NavLink to="/"><li><a>Home</a></li></NavLink>
        <NavLink to='/menu'><li><a>Our Menu</a></li></NavLink>
        <NavLink to="/order/Salads"><li><a>Order Food</a></li></NavLink>
        <NavLink to="dashboard"><li><a>Dashboard</a></li></NavLink>
        <NavLink to="dashboard/cart">
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <FaCartPlus className="text-3xl"></FaCartPlus>
                    <span className="badge badge-xs text-black  indicator-item">+{cartsItem?.length}</span>
                </div>
            </button>
        </NavLink>
        {user?.email ? <div className="flex">
            <NavLink onClick={handleLogOut}><li><a>LogOut</a></li></NavLink>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                </div>
            </div>
        </div>
            : <NavLink to="/login"><li><a>Login</a></li></NavLink>}
    </>
    return (
        <div>
            <div className="navbar bg-[#15151580] fixed z-10 max-w-[1200px] text-white ">
                <div className="md:navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl ">BISTO BOSS</a>
                </div>
                <div className="navbar-end hidden  md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;