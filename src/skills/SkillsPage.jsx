<<<<<<< Updated upstream
import SkillList from "./SkillList"
=======
import SkillsList from "./SkillsList";
import SkillForm from "./SkillForm";
import { useAuth } from "../auth/AuthContext";
>>>>>>> Stashed changes
import "./Skills.css";

export default function SkillsPage() {

  return (
    <>
      <h1>Skills</h1>
      <SkillList />
    </>
  );
}