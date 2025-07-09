import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage"; 
import Login from "./auth/Login";
import Register from "./auth/Register";
import SessionsPage from "./sessions/SessionsPage";
import CreateSessionPage from "./sessions/CreateSessionPage";
import { AllCharacters } from "./characters/AllCharacters";
import { OneCharacter } from "./characters/OneCharacter";
import { NewCharacter } from "./characters/NewCharacter";

export default function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          
          <Route path="register" element={<Register />} />
          <Route path="login"    element={<Login />} />

          <Route path="/sessions"     element={<SessionsPage />} />
          <Route path="/sessions/new" element={<CreateSessionPage />} />
          <Route path="/characters" element={<AllCharacters />}/>
          <Route path="/characters/:id" element={<OneCharacter />}/>
          <Route path="/characters/new" element={<NewCharacter />}/>


          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
  );
}
