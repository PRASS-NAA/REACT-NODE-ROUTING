import React from "react";
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import IndiDashboard from "./pages/individualdash";
import Login from "./pages/signin";

const App = ()=>
{
  return(
    <>
    <p>Let's Learn React Routing</p>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/dashboard/:username" element={<IndiDashboard></IndiDashboard>}></Route>
    </Routes>
    </>
  )
}

export default App;