import { Link } from "react-router";
import useQuery from "../api/useQuery"


export default function SkillsList() {
  const {
    data: skills,
    loading,
    error,
  } = useQuery("/skills", "skills");


if (loading || !skills) return <p>Loading...</p>
if (error) return <p>Sorry! {error}</p>

return (
  <ul>
    {skills.map((skill) => {
      <SkillListItem key={skill.id} skill={skill} />
    })}
  </ul>
  );
}

function SkillListItem({ skill }) {
  return (
    <li>
      <p>
        <Link to ={"/skills/" + skill.id}>{skill.name}</Link>
      </p>
    </li>
  );
}