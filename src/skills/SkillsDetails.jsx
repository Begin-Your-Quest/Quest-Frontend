import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";
import "./Skills.css";

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
    <p>{skill.magicPoints}</p>
    <p>{skill.damage}</p>
    <p>{skill.description}</p>
  </>
  );
}

