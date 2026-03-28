import {Link, Outlet} from "react-router-dom";
// remember to import the relevant css for the NavBar.jsx
import "./NavBar.css" 


function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default NavBar;