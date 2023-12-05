import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState, useAppSelector } from "../store/root.store";

const ProtectedRoute: React.FC = () => {
  const auth = useAppSelector((state: RootState) => state.auth.auth);
  const location = useLocation();

  if (!auth.isAuth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
