import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import All from "../pages/All";
import Completed from "../pages/Completed";
import Active from "../pages/Active";

export default function AppRoutes(props) {
  const { items } = props;
  return (
    <Routes>
      <Route path="/active" element={<Active />} />
      <Route path="/all" element={<All items={items} />} />
      <Route path="/completed" element={<Completed />} />
      <Route path="/" element={<Navigate replace to="/all" />} />
    </Routes>
  );
}
