import useMutation from "../api/useMutation";
import { useNavigate } from "react-router";

export const NewCharacter = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(`POST`, `/characters`, [`character`]);


  const createCharacter = async (formData) => {
    const name = formData.get("name");
    const clas = formData.get("class");
    const attack = formData.get("attack");
    const health = formData.get("health");
    const description = formData.get("description");
    mutate({name,clas,attack,health,description});
    navigate("/characters");
  };

  return (
    <>
      <form action={createCharacter}>
        <label>
          Character Name:
          <input type="text" name="name" required/>
        </label>
        <label>
          Character class:
          <input type="text" name="class" required/>
        </label>
        <label>
          Description:
          <input type="text" name="description" required/>
        </label>
        <label>
          Attack:
          <input type="number" name="attack" required/>
        </label>
        <label>
          Hit Points:
          <input type="number" name="health" required/>
        </label>
        <button>ADD NEW CHARACTER</button>
      </form>
    </>
  )
}