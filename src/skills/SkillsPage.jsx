import SkillsList from "./SkillsList";
import CreateSkill from "./CreateSkill";
import { useAuth } from "../auth/AuthContext";

import "./Skills.css";


export default function SkillsPage() {
  const { token } = useAuth();
  
    return (
      <>
        <h1>Skills</h1>
        <SkillsList />
        {token && <CreateSkill />}
      </>
  );
}