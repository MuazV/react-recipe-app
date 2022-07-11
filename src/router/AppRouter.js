import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import NotFound from "../pages/NotFound";
import Navbar from "../components/navbar/Navbar";
import Details from "../pages/details/Details";

const AppRouter = () => {
  const [nav, setNav] = useState(false)

  

  return (
    <BrowserRouter>
    {nav && <Navbar />}
      <Routes>
        <Route path="/" element={<Login funcNav={setNav}/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/home" element={<Home funcNav={setNav} />} />
        <Route path="/Details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
