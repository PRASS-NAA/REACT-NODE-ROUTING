import React from "react";
import { useParams } from "react-router-dom";

const IndiDashboard = () =>
{
    const {username} = useParams();
    return(
        <>
        <h1>{`Welcome To DashBoard of User ${username}`}</h1>
        </>
    )
}

export default IndiDashboard;