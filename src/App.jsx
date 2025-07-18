import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";
import HomePage from "./homepage.jsx"; 
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import CreateSessionPage from "./sessions/createSessionPage.jsx";
import { AllCharacters } from "./characters/AllCharacters.jsx";
import { OneCharacter } from "./characters/OneCharacter.jsx";
import { NewCharacter } from "./characters/NewCharacter.jsx";
import Sessions from "./sessions/sessions";
import SessionById from "./sessions/SessionById.jsx";
import AddCharacterSection from "./sessions/AddCharacterSection.jsx";
import  SkillsList  from "./skills/SkillsList.jsx";
import  SkillsDetails from "./skills/SkillsDetails.jsx";
import { EditCharacterForm } from "./characters/EditCharacterForm.jsx";
import CreateSkill from "./skills/CreateSkill.jsx";
import DiscordCreateForm from "./discord/DiscordCreateForm.jsx";
import DiscordInviteLink from "./discord/DiscordInviteLink.jsx";
import SelectSkillSection from "./characters/SelectSkillsSection.jsx";

export default function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/sessions/:id" element={<SessionById />} />
          <Route path="/sessions/:id/characters" element={<AddCharacterSection />} />
          <Route path="/sessions/new" element={<CreateSessionPage />} />
          <Route path="/characters" element={<AllCharacters />}/>
          <Route path="/characters/:id" element={<OneCharacter />}/>
          <Route path="/characters/:id/edit" element={<EditCharacterForm />}/>
          <Route path="/characters/:id/skills" element={<SelectSkillSection />}/>
          <Route path="/characters/new" element={<NewCharacter />}/>
          <Route path="/skills" element={<SkillsList  />}/>
          <Route path="/skills/:id" element={<SkillsDetails/>}/>
          <Route path="/skills/create" element={<CreateSkill/>} />  
          <Route path="/discord/create" element={<DiscordCreateForm />} />
          <Route path="/discord/invite" element={<DiscordInviteLink />} />
          
          {/* Catch-all route for 404 */} 
          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
  );
}
