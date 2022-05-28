import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../../page/Auth";

export const Nav = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Auth />} />
      </Routes>
    </Router>
  );
};
