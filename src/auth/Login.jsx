import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Log in to your account</h1>
        <form className="auth-form" action={onLogin}>
          <label className="auth-label">
            Username
            <input
              className="auth-input"
              type="text"
              name="username"
              required
            />
          </label>
          <label className="auth-label">
            Password
            <input
              className="auth-input"
              type="password"
              name="password"
              required
            />
          </label>
          <button type="submit" className="auth-button">
            Login
          </button>
          {error && <output className="auth-error">{error}</output>}
        </form>
        <p className="auth-footer">
          <Link className="auth-link" to="/register">
            Need an account? Register here.
          </Link>
        </p>
      </div>
    </div>
  );
 }