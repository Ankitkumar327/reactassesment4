import React from "react";
import Home from "./Component/Home.js";
import Navbar from "./Component/Navbar.js";
import Student from "./Component/Student.js";
import { Routes, Route, Navigate } from "react-router-dom";
import Contactus from "./Component/Contactus.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contactus />}></Route>
        <Route path="/student" element={<Student />}></Route>
      </Routes>
    </>
  );
};
export default App;
