import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import All from "../pages/All/All";
import Completed from "../pages/Completed/Completed";
import Active from "../pages/Active/Active";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/active" element={<Active />} />
      <Route path="/all" element={<All />} />
      <Route path="/completed" element={<Completed />} />
      <Route path="/" element={<Navigate replace to="/main" />} />
    </Routes>
  );
}
