import { useState } from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("authToken") !== null;
  });

  const login = (token = "dummy-token") => {
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
}

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login(); // store a dummy token
    navigate("/profile"); // go to the protected route
  };

  return <button onClick={handleLogin}>Log in</button>;
}

export function ProtectedRoute({ element, ...rest }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
}
