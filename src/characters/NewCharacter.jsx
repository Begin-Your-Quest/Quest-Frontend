import useMutation from "../api/useMutation";
import { Link, useNavigate } from "react-router";

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
      <Link to={"/characters"} className="back-arrow">← Back</Link>
      <form className="updateForm" action={createCharacter}>
        <label id="name">Name: 
          <input type="text" name="name" required/>
        </label>
        <label id="class">Class: 
          <input type="text" name="class" required/>
        </label>
        <label id="description">Description: 
           <textarea name="description" required rows={2} />
        </label>
        <div className="statRow">
          <label htmlFor="attack">Attack:</label>
          <input type="number" id="attack" name="attack" required />
        </div>
        <div className="statRow">
          <label htmlFor="hp">Hit Points:</label>
          <input type="number" id="hp" name="health" required />
        </div>
        <button id="updateButton">CREATE CHARACTER</button>
      </form>
    </>
  )
}