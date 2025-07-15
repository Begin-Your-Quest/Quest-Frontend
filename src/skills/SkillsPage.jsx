import SkillsList from "./SkillsList";
import SkillForm from "./SkillForm";
import { useAuth } from "../auth/AuthContext";


export default function SkillsPage() {
  const { token } = useAuth();
  
    return (
      <>
        <h1>Skills</h1>
        <SkillsList />
        {token && <SkillForm />}
      </>
  );
}