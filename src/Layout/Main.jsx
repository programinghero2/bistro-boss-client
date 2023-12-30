import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    const location = useLocation()
    const NoNavbarOrFooter = location.pathname.includes("/login") || location.pathname.includes("/register")
    return (
        <div>
            <div><Toaster /></div>
            <div>
               {NoNavbarOrFooter || <Navbar></Navbar>}
            </div>
            <Outlet></Outlet>
            <div>
                {NoNavbarOrFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Main;