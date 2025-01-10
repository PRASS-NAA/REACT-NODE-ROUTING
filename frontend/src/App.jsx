import React from "react";
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import IndiDashboard from "./pages/individualdash";
import Login from "./pages/signin";
import Recv from "./pages/recv";
import N404 from "./pages/404";

const App = ()=>
{
  return(
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/dashboard/:username" element={<IndiDashboard></IndiDashboard>}></Route>
      <Route path="/dashboard/:username/:recv" element={<Recv></Recv>}></Route>
      <Route path="*" element={<N404></N404>}></Route>
    </Routes>
    </>
  )
}

export default App;