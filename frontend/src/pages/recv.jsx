import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Recv = () =>
{
    const recv = useParams().recv;
    return(
        <>
        <h1>{`This is Receiver ${recv}`}</h1>
        </>
    )
}

export default Recv;