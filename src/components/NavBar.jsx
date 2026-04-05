import {Link, Outlet} from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import Logo from "./Logo.jsx";
// remember to import the relevant css for the NavBar.jsx
import "../index.css" 



function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({token: null});
    };

    console.log(auth)
    
    return (
        <div className="app-shell">
            <div className="nav-bar">
                <Logo />
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/fundraisers">Fundraisers</Link>
                    <Link to="/create">Create a Fundraiser</Link>
                    {auth.token ? (
                        <Link to="/" onClick={handleLogout}>
                            Log Out
                        </Link>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                    <Link to="/signup">Signup</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    );
};

export default NavBar;