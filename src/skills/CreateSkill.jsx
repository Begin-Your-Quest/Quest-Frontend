import useMutation from "../api/useMutation";
import { useNavigate } from "react-router";

 export default function CreateSkill() {
  const navigate = useNavigate();
  const { mutate } = useMutation(`POST`, `/skills`, [`skill`]);

  const createSkill = async (formData) => {
    const name = formData.get("name");
    const magicPoints = formData.get("magic_points");
    const damage = formData.get("damage");
    const description = formData.get("description");
    mutate({name,magicPoints,damage,description});
    navigate("/skills");
  };

    return (
    <div className="skill-detail-card">
      <h1 className="skill-title">Create New Skill</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createSkill(new FormData(e.target));
        }}
        className="skill-form"
      >
        <label>
          Skill Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Magic Points:
          <input type="number" name="magic_points" required />
        </label>
        <label>
          Damage:
          <input type="number" name="damage" required />
        </label>
        <label>
          Description:
          <input type="text" name="description" required />
        </label>
        <button type="submit" className="skill-btn">
          Create New Skill
        </button>
      </form>
    </div>
  );
}