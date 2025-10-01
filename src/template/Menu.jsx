import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">
          <i className="fas fa-calendar-check"></i> TodoApp
        </span>

        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/todos">
              Tarefas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
