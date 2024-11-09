import { Routes,Route } from "react-router-dom";
import Login from "./Login";
import React from 'react'
import Register from "./Register";
import Getalluser from "./Getalluser";
import Id from "./Id";

const Router = () => {
  return (
    <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Getalluser" element={<Getalluser/>}/>
        <Route path="/Id" element={<Id/>}/>
    </Routes>
  )
}

export default Router
