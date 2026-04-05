import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postLogin from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";

import Footer from "../components/Footer";
import "../index.css";

function LoginForm() {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const [credientials, setCredientials] = useState({
        username:"",
        password:"",
    });


    // takes an event 
    const handleChange = (event) => {
        const {id, value} = event.target;
        setCredientials((prevCredentials) => ({
            ...prevCredentials, // expanding the prevCredientials object
            [id]:value
        }))
    }; 

    const handleSubmit = (event) => {
        event.preventDefault();
        if(credientials.username && credientials.password) {
            postLogin(
                credientials.username,
                credientials.password
            ).then((response) => {
                // Go to Application -> Local Storage in dev tools
                window.localStorage.setItem("token", response.token);
                setAuth({
                    token:response.token,
                });
                navigate("/");
            })
        }
    }


    return (
        <div className="login-page">
            <div className="login-main">
                <form className ="login-form">
                    <h2>Login</h2>
                    <div className ="username-field">
                        <label htmlFor="username">Username </label>
                        <input 
                        type="text" 
                        id ="username" 
                        placeholder="Username"
                        onChange={handleChange}
                        />
                    </div>
                    <div className ="password-field">
                        <label htmlFor="password">Password </label>
                        <input 
                        type="password" 
                        id="password" 
                        placeholder="Password"
                        onChange={handleChange} 
                        />
                    </div>
                    <button className="submit-button" type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div>
            <Footer />
        </div>
        );
}

export default LoginForm;