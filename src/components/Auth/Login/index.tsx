import React from "react";
import "./styles.css";

const Index = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
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
