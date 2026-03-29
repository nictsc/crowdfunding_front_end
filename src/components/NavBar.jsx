import {Link, Outlet} from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
// remember to import the relevant css for the NavBar.jsx
import "./NavBar.css" 



function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({token: null});
    };

    console.log(auth)
    
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/fundraisers">Fundraisers</Link>
                {auth.token ? (
                    <Link to ="/" onClick={handleLogout}>
                        Log Out
                    </Link>
                ) : (
                    <Link to="/login">Login</Link>
                    
                )}
                <Link to="/signup">Signup</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default NavBar;