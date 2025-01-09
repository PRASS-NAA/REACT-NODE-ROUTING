import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log(username);
        console.log(password);

        // Navigate to the individual dashboard
        navigate(`/dashboard/${username}`);
    };

    return (
        <>
            <h1>Enter Log In Details</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Sign-In</legend>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Click</button>
                </fieldset>
            </form>
        </>
    );
};

export default Login;
