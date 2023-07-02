import React from "react";
import { Link, NavLink } from "react-router-dom";
import loginIcon from "../assets/images/avatar-icon.png";
import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    alert("Logout successfully");
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={loginIcon} className="login-icon" />
        </Link>
        <button
          onClick={fakeLogOut}
          type="button"
          className="btn btn-outline-danger"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
