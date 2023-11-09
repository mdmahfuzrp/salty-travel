import { createBrowserRouter } from "react-router-dom"
import MainWebsite from "../layout/MainWebsite"
import Home from "../pages/Home"
import About from "../pages/About"
import Destination from "../pages/Destination"
import Error from "../pages/Error"
import Login from "../pages/Login"
import Register from "../pages/Register"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainWebsite />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/destination',
                element: <Destination />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/*',
        element: <Error />
    }
])
export default router