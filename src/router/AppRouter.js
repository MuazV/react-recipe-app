import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import NotFound from "../pages/NotFound";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
