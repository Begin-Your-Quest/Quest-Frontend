import { useParams, useNavigate } from "react-router";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";
import "./Skills.css";


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

  return (
    <div className="skill-detail-card">
      <h1 className="skill-title">{skill[0].name}</h1>
      <ul className="skill-stats">
        <li><strong>MP:</strong> {skill[0].magic_points}</li>
        <li><strong>Damage:</strong> {skill[0].damage}</li>
        <li><strong>Description:</strong> {skill[0].description}</li>
      </ul>
      {token && <DeleteButton id={skill[0].id} />}
    </div>
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
    <button
      className="skill-delete-btn"
      onClick={onDeleteSkill}
      disabled={loading} >
      {loading ? "Deleting…" : "Delete"}
    </button>
  );
}
