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
    <>
      <form action={createSkill}>
        <label>
          skill Name:
          <input type="text" name="name" required/>
        </label>
        <label>
          skill Magic Points:
          <input type="number" name="magic_points" required/>
        </label>
        <label>
          Damage:
          <input type="number" name="damage" required/>
        </label>
        <label>
          Description:
          <input type="text" name="description" required/>
        </label>
        <button>Create New Skill</button>
      </form>
    </>
  )
}

