import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const IndiDashboard = () =>
{
    const [user,setUser] = useState({});
    const[error,setError] = useState({});
    const username = useParams().username;
    const navigate = useNavigate();

    const invokeme = async() =>
    {
        try{
            const response = await axios.get(`http://localhost:5000/dashboard/${username}`);

            if(response.status == 200)
            {
                console.log(response.data);
                console.log(response.status);
                setUser(response.data);
            }else{
                console.log("Error");
                setError(response.data);
            }
        }catch(err)
        {
            window.alert("Error Occured");
            console.log(err);
        }
    }

    const recv = (recvId) =>
    {
        navigate(`./${recvId}`);
    }

    useEffect(()=>
    {
        invokeme();
    },[])
    return(
        <>
        {user ? (
            <>
            <h1>{user.id}</h1>
            <h2>{user.username}</h2>
            <h3>{user.email}</h3>
            <button onClick={() => recv(101)}>101</button>
            <button onClick={() => recv(102)}>102</button>
            <button onClick={() => recv(103)}>103</button>
            </>
        ):(
            <>
                <h1>{error}</h1>
            </>
        )}
        </>
    )
}

export default IndiDashboard;