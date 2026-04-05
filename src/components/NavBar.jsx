import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import Logo from "./Logo.jsx";
import hamburgerIcon from "../../media/hamburger.svg";
// remember to import the relevant css for the NavBar.jsx
import "../index.css" 



function NavBar() {
    const {auth, setAuth} = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({token: null});
        setIsMenuOpen(false);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    console.log(auth)
    
    return (
        <div className="app-shell">
            <div className="nav-bar">
                <Logo />
                <button
                    className="hamburger-button"
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <img src={hamburgerIcon} alt="" aria-hidden="true" />
                </button>
                <nav className={isMenuOpen ? "is-open" : ""}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/fundraisers" onClick={closeMenu}>Fundraisers</Link>
                    <Link to="/create" onClick={closeMenu}>Create a Fundraiser</Link>
                    {auth.token ? (
                        <Link to="/" onClick={handleLogout}>
                            Log Out
                        </Link>
                    ) : (
                        <Link to="/login" onClick={closeMenu}>Login</Link>
                    )}
                    <Link to="/signup" onClick={closeMenu}>Signup</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    );
};

export default NavBar;