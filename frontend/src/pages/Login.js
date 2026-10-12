import React, { useState } from "react";
import { login } from "../Services/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const res = await login({ email, password });
        localStorage.setItem("token", res.data.token);
        alert("Login successful");
    };

    return (
        <div>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;