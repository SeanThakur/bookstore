import React from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { RootState, actions, useAppSelector } from "store/root.store";

const Nav = () => {
  const navigate = useNavigate();
  const auth = useAppSelector((state: RootState) => state.auth.auth);

  const onNavClick = () => {
    navigate("/");
  };

  const onAuthClick = () => {
    navigate("/login");
  };

  const logout = async () => {
    await actions.auth.logout("false");
    onAuthClick();
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
      {auth.isAuth ? (
        <div className="nav-items">
          <Link className="nav-item" to={"/cart"}>
            Cart
          </Link>
          <div onClick={logout} className="nav-item logout-link">
            Logout
          </div>
        </div>
      ) : (
        <button className="login-button" onClick={onAuthClick}>
          Login To Buy
        </button>
      )}
    </nav>
  );
};

export default Nav;
