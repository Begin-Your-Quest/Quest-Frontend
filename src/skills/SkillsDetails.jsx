import { useParams } from "react-router";
import useQuery from "../api/useQuery";

export default function SkillDetails() {
const { id } = useParams();
const {
  data: skill,
  loading,
  error,
} = useQuery(`/skills/${id}`, "skill");

if (loading) return <p>Loading...</p>;
if(error || !skill) return <p>Sorry! {error}</p>;

return (
  <>
      <h1>{skill.name}</h1>
      <p>Magic: {skill.magic_points}</p>
      <p>Damage: {skill.damage}</p>
      {skill.description && <p>{skill.description}</p>}
  </>
  );
}

