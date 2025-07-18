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
     <div className="discord-page">
      <div className="skill-detail-card">
        <h1 className="skill-title">Create New Skill</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createSkill(new FormData(e.target));
        }}
        className="discord-form"
      >
        <label className="discord-label">
          Skill Name:
          <input type="text" name="name" className="discord-input" required />
        </label>
        <label className="discord-label">
          Magic Points:
          <input type="number" name="magic_points" className="discord-input" required />
        </label>
        <label className="discord-label">
          Damage:
          <input type="number" name="damage" className="discord-input" required />
        </label>
        <label className="discord-label">
          Description:
          <input type="text" name="description" className="discord-input" required />
        </label>
        <button type="submit" className="discord-button">
          Create New Skill
        </button>
      </form>
      </div>
    </div>
  );
}