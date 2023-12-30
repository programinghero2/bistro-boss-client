import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/Menu/Menu';
import OrderFood from '../pages/OrderFood/OrderFood';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import Dashboad from '../Layout/Dashboad';
import Cart from '../pages/Dashboard/cart/cart';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import AddItems from '../pages/Dashboard/AddItems/AddItems';
import AdminRoute from './AdminRoute';
import ManageItem from '../pages/Dashboard/ManageItem/ManageItem';
import UpdateItem from '../pages/Dashboard/UpdateItem/UpdateItem';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <PrivateRoute><Menu></Menu></PrivateRoute>
            },
            {
                path: "/order/:category",
                element: <OrderFood></OrderFood>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"dashboard",
        element:<Dashboad></Dashboad>,
        children:[
            {
                path:"cart",
                element:<Cart></Cart>
            },
            // admin route
            {
                path:"allUsers",
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:"addItems",
                element:<AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path:"manageItems",
                element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path:"updateItem/:id",
                element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>
            }
        ]
    }
])

export default router;