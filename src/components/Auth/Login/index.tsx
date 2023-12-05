import React from "react";
import "./styles.css";
import { actions } from "../../../store/root.store";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await actions.auth.login("adsf");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={onLogin}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p className="login-note">
        This is a static application. You can use any username and password to
        login. Enjoy!
      </p>
    </div>
  );
};

export default Index;
