import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "../page/Home/Home";
import AboutUs from "../page/AboutUs/AboutUs";
import ProductList from "../page/ProductList/ProductList";
import Auth from "../page/Auth/Auth";

const NavRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default NavRoutes;
