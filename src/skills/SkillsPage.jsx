import SkillsList from "./SkillsList";
import SkillForm from "./SkillForm";
import { useAuth } from "../auth/AuthContext";
import "./Skills.css";

export default function SkillsPage() {

  return (
    <>
      <h1>Skills</h1>
      <SkillList />
    </>
  );
}