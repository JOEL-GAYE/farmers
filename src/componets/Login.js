import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password123') {
            setIsLogin(true);
            navigate('/home'); 
            alert('Login successful');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <form className="container" onSubmit={handleLogin}>
                <h1 className="login-title">Login</h1>
                <section className="input-box">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <i className="bx bxs-user"></i>
                </section>
                <section className="input-box">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="bx bxs-lock-alt"></i>
                </section>
                <section className="remember-forgot-box">
                    <div className="remember-me">
                        <input type="checkbox" name="remember-me" id="remember-me" />
                        <label htmlFor="remember-me">
                            <h5>Remember me</h5>
                        </label>
                    </div>
                    <a className="forgot-password" href="#">
                        <h5>Forgot password?</h5>
                    </a>
                </section>
                <button className="login-button" type="submit">
                    Login
                </button>
                <h5 className="dont-have-an-account">
                    Don't have an account? <a href="#"><b>Register</b></a>
                </h5>
            </form>
        </div>
    );
}

export default Login;
