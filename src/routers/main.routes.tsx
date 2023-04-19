import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/base/navbar/Navbar";
import { withPrime } from "../components/base/primereact";
import LoginPage from "../pages/login/login-page";
import AssetPage from "../pages/asset/asset-page";


{/* <h1>NavBar Page</h1> */}
const NavBar = () => <Navbar/>
const Login = () => <LoginPage/>
const Asset = () => <AssetPage/>

const NavBarWithTheme = withPrime(NavBar)
const LoginWithTheme = withPrime(Login)
const AssetWithTheme = withPrime(Asset)

const mainRoutes = createBrowserRouter([
    {
        path:'',
        element:<LoginWithTheme/>
    },
    {
        path: 'asset',
        element:<AssetWithTheme/>
    }

])

export{mainRoutes}