import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AllTodoPage from "../pages/AllTodoPage";
import CompletedTodosPage from "../pages/CompletedTodosPage";
import ActiveTodoPage from "../pages/ActiveTodoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/active" element={<ActiveTodoPage />} />
      <Route path="/all" element={<AllTodoPage />} />
      <Route path="/completed" element={<CompletedTodosPage />} />
      <Route path="/" element={<Navigate replace to="/all" />} />
    </Routes>
  );
};

export default AppRoutes;
