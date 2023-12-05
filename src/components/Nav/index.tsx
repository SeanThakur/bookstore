import React from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const onNavClick = () => {
    navigate("/");
  };

  const onAuthClick = () => {
    navigate("/login");
  };

  return (
    <nav className="nav">
      <h4 onClick={onNavClick} className="nav-title">
        Book Store
      </h4>
      <div className="nav-items">
        <Link className="nav-item" to={"/books"}>
          Books
        </Link>
        <Link className="nav-item" to={"/authors"}>
          Authors
        </Link>
      </div>
      <button className="login-button" onClick={onAuthClick}>
        Login To Buy
      </button>
    </nav>
  );
};

export default Nav;
