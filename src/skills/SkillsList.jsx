import { Link } from "react-router";
import useQuery from "../api/useQuery"
import "./Skills.css";

export default function SkillsList() {
  const {
    data: skills,
    loading,
    error,
  } = useQuery("/skills", "skills");


if (loading || !skills) return <p>Loading...</p>
if (error) return <p>Sorry! {error}</p>

 return (
    <ul className="skills-list">
      {skills.map(skill => (
        <li key={skill.id} className="skill-item">
          <Link
            to={`/skills/${skill.id}`}
            className="skill-btn">
            {skill.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}