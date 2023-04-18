import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/base/navbar/Navbar";
import { withPrime } from "../components/base/primereact";
import LoginPage from "../pages/login/login-page";


{/* <h1>NavBar Page</h1> */}
const NavBar = () => <Navbar/>
const Login = () => <LoginPage/>

const NavBarWithTheme = withPrime(NavBar)
const LoginWithTheme = withPrime(Login)


const mainRoutes = createBrowserRouter([
    {
        path:'',
        element:<LoginWithTheme/>
    },
    // {
    //     path:'',
    //     element: <NavBarWithTheme/>,
    //     children:[
    //         {
    //             path:'category',
    //             element: <Category/>
    //         },
    //         {
    //             path:'industry'

    //         },
            
    //     ]
    // }
])

export{mainRoutes}