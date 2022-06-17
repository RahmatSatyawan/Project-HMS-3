import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../page/Home/Home";
import AboutUs from "../page/AboutUs/AboutUs";
import Auth from "../page/Auth/Auth";
import Category from "../page/Category/Category";
import Shipping from "../page/Shipping/Shipping";
import Profile from "../page/Profile/Profile";
import Cart from "../component/Cart/Cart";
import Transaction from "../component/Transaction/Transaction";
import Admin from "../page/Admin/Admin";

const NavRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login-register" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default NavRoutes;
