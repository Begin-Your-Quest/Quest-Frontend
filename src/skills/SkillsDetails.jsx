import { useParams, useNavigate } from "react-router";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";



export default function SkillsDetails() {
const { token } = useAuth();
const { id } = useParams();
const {
  data: skill,
  loading,
  error,
} = useQuery(`/skills/${id}`, "skill"); 

if (loading) return <p>Loading...</p>;
if(error || !skill) return <p>Sorry! {error}</p>;

console.log(skill)
return (
  <>
    <h1>{skill[0].name}</h1>
      <ul>
      <li>MP: {skill[0].magic_points}</li>
      <li>Damage: {skill[0].damage}</li>
      <li>description: {skill[0].description}</li> 
      </ul>
      {token && <DeleteButton id={skill.id} />}
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
    if (success) navigate("/skills");
  };

  return (
    <button onClick={onDeleteSkill}>
      {loading ? "Deleting" : (error ?? "Delete")}
    </button>
  );
}
