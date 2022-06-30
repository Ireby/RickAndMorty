import React from "react";
import "./Landing.css";
import { Outlet, Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="containers">
        <div className="nav">
          <Link to="/">
            <p>Index</p>
          </Link>
        </div>

        <div className="nav">
          <Link to="/Home">
            <p>Characters</p>
          </Link>
        </div>

        <div className="nav">
          {" "}
          <Link to="/create">
            <p>Create</p>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Nav;
