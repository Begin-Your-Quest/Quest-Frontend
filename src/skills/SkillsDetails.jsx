import { useParams, useNavigate } from "react-router";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";


export default function SkillDetails() {
  const { token } = useAuth();
const { id } = useParams();
const {
  data: skill,
  loading,
  error,
} = useQuery(`/skills/${id}`, "skill"); 

console.log("skills")
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

function DeleteButton({ id }) {
  const navigate = useNavigate();
  const {
    mutate: deleteSkill,
    loading,
    error,
  } = useMutation("DELETE", "/skills/" + id, ["skills", "skill"]);

  const onDeleteSkill = async () => {
    const success = await deleteSkill();
    if (success) navigate("/activities");
  };

  return (
    <button onClick={onDeleteSkill}>
      {loading ? "Deleting" : (error ?? "Delete")}
    </button>
  );
}
