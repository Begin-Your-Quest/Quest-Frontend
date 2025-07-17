import SkillsList from "./SkillsList";
// import CreateSkill from "./CreateSkill";
import { Link } from "react-router"


import "./Skills.css";


export default function SkillsPage() {
  
    return (
      <>
        <h1>Skills</h1>
        <SkillsList />
        <Link to={`/skills/create`}>create skill</Link>
        {/* <CreateSkill /> */}
      </>
  );
}