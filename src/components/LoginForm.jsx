import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js"

function LoginForm() {
    const navigate = useNavigate();
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
                // go to Application -> Local Storage in dev tools
                window.localStorage.setItem("token", response.token);
                navigate("/");
            })
        }
    }


    return (
        <form>
            <div>
                <label htmlFor="username">Username: </label>
                <input 
                type="text" 
                id ="username" 
                placeholder="Enter username"
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                type="password" 
                id="password" 
                placeholder="Password"
                onChange={handleChange} 
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
    );
}

export default LoginForm;