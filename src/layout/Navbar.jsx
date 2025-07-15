import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header id="navbar">
     <NavLink to="/" className="brand">
       <img src="/media/BYQlogo.png" alt="Begin Your Quest Logo" className="brand-logo" />
     </NavLink>
      <nav>
        <NavLink to="/skills">Skills</NavLink>
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
