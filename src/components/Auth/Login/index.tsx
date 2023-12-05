import React from "react";
import "./styles.css";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState, actions, useAppSelector } from "store/root.store";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAppSelector((state: RootState) => state.auth.auth);

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await actions.auth.login("true");
    navigate("/");
  };

  if (auth.isAuth) {
    return <Navigate to="/" />;
  }

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

export default Login;
