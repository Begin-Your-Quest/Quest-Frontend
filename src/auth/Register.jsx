import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Register for an account</h1>

        <form className="auth-form" action={onRegister}>
          <label className="auth-label">
            Username
            <input className="auth-input" type="text" name="username" />
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
            Register
          </button>
          {error && <output className="auth-error">{error}</output>}
        </form>
        <p className="auth-footer">
          <Link className="auth-link" to="/login">
            Already have an account? Log in here.
          </Link>
        </p>
      </div>
    </div>
  );
}
