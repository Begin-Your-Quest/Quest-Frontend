import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header id="navbar">
      <NavLink id="brand" to="/">
        <p>A Quest Begins</p>
      </NavLink>
      <nav>
        {token ? (
          <>
          <NavLink to="/sessions">Sessions</NavLink>
            <button onClick={logout}>Log out</button>
          </>
          
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log in</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
