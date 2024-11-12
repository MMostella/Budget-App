import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Overview from "./components/Overview";
import Home from "./Pages/Home";

const AppRoutes = () => (
  <div>
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="landing" element={<Landing />} />
      <Route path="register" element={<Register />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="overview" element={<Overview />} />
    </Routes>
  </div>
);
export default AppRoutes;
