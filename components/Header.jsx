import React from "react";
import { Link, NavLink } from "react-router-dom";
import loginIcon from "../assets/images/user.png";
import Button from "@mui/material/Button";

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

        <Button
          className="margin-top"
          onClick={fakeLogOut}
          variant="outlined"
          color="success"
        >
          Logout
        </Button>
      </nav>
    </header>
  );
}
