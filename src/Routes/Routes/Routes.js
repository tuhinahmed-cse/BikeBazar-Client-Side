import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layouts/Dashboard";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import SellerAddProduct from "../../Pages/Dashboard/SellerAddProduct/SellerAddProduct";
import SellerViewProducts from "../../Pages/Dashboard/SellerAddProduct/SellerViewProducts";
import UserBookings from "../../Pages/Dashboard/UserBookings/UserBookings";
import AllUsers from "../../Pages/Dashboard/Users/AllUsers";
import Buyers from "../../Pages/Dashboard/Users/Buyers";
import Sellers from "../../Pages/Dashboard/Users/Sellers";
import AllBikeCategory from "../../Pages/Home/BikeCategory/AllBikeCategory";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/collection/:id',
                element: <PrivateRoute><AllBikeCategory></AllBikeCategory></PrivateRoute>,
                loader:({ params }) => fetch(`http://localhost:5000/bikes/${params.id}`)
            },
            
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[


            {

                path: '/dashboard/userbooks',
                element: <BuyerRoute><UserBookings></UserBookings></BuyerRoute>
            },
            {

                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {

                path: '/dashboard/allbuyers',
                element: <AdminRoute><Buyers></Buyers></AdminRoute>
            },
            {

                path: '/dashboard/allsellers',
                element: <AdminRoute><Sellers></Sellers></AdminRoute>
            },
            {

                path: '/dashboard/addproduct',
                element: <SellerRoute><SellerAddProduct></SellerAddProduct></SellerRoute>
            },
            {

                path: '/dashboard/viewproduct',
                element: <SellerRoute><SellerViewProducts></SellerViewProducts></SellerRoute>
            }

        ]
    }
])
export default router;
