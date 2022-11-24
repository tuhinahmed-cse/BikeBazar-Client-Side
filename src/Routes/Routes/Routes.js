import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AllBikeCategory from "../../Pages/Home/BikeCategory/AllBikeCategory";
import BikeCollection from "../../Pages/Home/BikeCategory/BikeCollection";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";

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
                path: '/collection/:id',
                element: <AllBikeCategory></AllBikeCategory>,
                loader:({ params }) => fetch(`http://localhost:5000/bikes/${params.id}`)
            },
            
        ]
    }
])
export default router;