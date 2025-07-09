import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage"; 
import Login from "./auth/Login";
import Register from "./auth/Register";
import SessionsPage from "./sessions/SessionsPage";
import CreateSessionPage from "./sessions/CreateSessionPage";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          
          <Route path="register" element={<Register />} />
          <Route path="login"    element={<Login />} />

          <Route path="sessions"     element={<SessionsPage />} />
          <Route path="sessions/new" element={<CreateSessionPage />} />

          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
