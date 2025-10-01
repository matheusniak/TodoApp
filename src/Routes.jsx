import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Todo from "./todo/Todo";
import About from "./about/About";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/todos" replace />} />
      <Route path="/todos" element={<Todo />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/todos" replace />} />
    </Routes>
  );
}
