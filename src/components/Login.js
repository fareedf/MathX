import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate();

    const log = () => {
        alert("You have logged in!")
        navigate("/HomePage");
    }

return (
<div className="login">
<form action="">
    <h1>Login</h1>
    <div className="inputs">
        <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} value={user} required/>
        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={pass} required/>
        <div class="checkbox-container">
                <input type="checkbox" id="remember-me"/>
                <label for="remember-me">Remember me</label>
            </div>
        <button onClick={log} type="submit">Login</button>
    </div>
</form>
</div>
);
}

export default Login;