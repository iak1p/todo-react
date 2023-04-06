import React from "react";
import { Route, Routes } from "react-router-dom";
import Completed from "../pages/Completed/Completed";
import Main from "../pages/Main/Main";

export default function AppRoutes(props) {
  const { onClick } = props;

  return (
    <Routes>
      <Route path="/main" element={<Main onClick={onClick} />} />
      <Route path="/completed" element={<Completed />} />
    </Routes>
  );
}
