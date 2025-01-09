import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>
{
    const navigate = useNavigate();
    const dashboard = () =>
    {
     navigate("/dashboard");   
    }
    return(
        <>
        <h1>Home Page</h1>
        <button onClick={dashboard}>Click Here To Navigate To Home Page</button>
        </>
    )
}

export default Home;