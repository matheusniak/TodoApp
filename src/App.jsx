import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./template/Menu";
import AppRoutes from "./Routes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Menu />
        <div className="content-container">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}
