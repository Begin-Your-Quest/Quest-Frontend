import { useParams } from "react-router"
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { Link, useNavigate } from "react-router";

export const EditCharacterForm = () => {
  const {id} = useParams();
  const { data: character } = useQuery(`/characters/${id}`, `character`);
  const { mutate } = useMutation(`PUT`, `/characters`, [`character`]);
  const navigate = useNavigate();


  const updateCharacter = async (formData) => {
    const name = formData.get("name");
    const clas = formData.get("class");
    const attack = formData.get("attack");
    const health = formData.get("health");
    const description = formData.get("description");
    mutate({name,clas,attack,health,description,userId: character.user_id,id: character.id});
    navigate("/characters");
  };

  if(!character) return null;

  return (
    <>
      <form className="updateForm" action={updateCharacter}>
        <Link to={`/characters/${character.id}`} className="back-arrow">← Back</Link>
        <label id="name">Name: 
          <input type="text" defaultValue={character.name} name="name" required/>
        </label>
        <label id="class">Class: 
          <input type="text" defaultValue={character.class} name="class" required/>
        </label>
        <label id="description">Description: 
           <textarea defaultValue={character.description} name="description" required rows={2} />
        </label>
        <div className="statRow">
          <label htmlFor="attack">Attack:</label>
          <input type="number" id="attack" defaultValue={character.attack_stat} name="attack" required />
        </div>
        <div className="statRow">
          <label htmlFor="hp">Hit Points:</label>
          <input type="number" id="hp" defaultValue={character.health_stat} name="health" required />
        </div>
        <button id="updateButton">UPDATE CHARACTER</button>
      </form>
    </>
  )
}