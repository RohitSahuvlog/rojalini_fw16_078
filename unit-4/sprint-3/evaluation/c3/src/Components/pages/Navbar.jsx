import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <nav>
        {/* keep all the NavLinks here */}
        <NavLink className="n" to={"/"}>Home</NavLink>
        <NavLink className="n" to={"/about"}>About</NavLink>
        <NavLink  className="np" to={"/books"}>Books</NavLink>
        {token ? (
          <NavLink  className="n"to={"/logout"}>Logout</NavLink>
        ) : (
          <NavLink className="n" to={"/login"}>Login</NavLink>
        )}
      </nav>
    </>
  );
};