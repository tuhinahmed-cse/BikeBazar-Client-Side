import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Loading from "../../Pages/Shared/Loading/Loading";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
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
                path: '/load',
                element: <Loading></Loading>
            }
        ]
    }
])
export default router;