import { useParams } from "react-router"
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useNavigate } from "react-router";

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
      <form action={updateCharacter}>
        <label>
          Character Name:
          <input type="text" defaultValue={character.name} name="name" required/>
        </label>
        <label>
          Character class:
          <input type="text" defaultValue={character.class} name="class" required/>
        </label>
        <label>
          Description:
          <input type="text" defaultValue={character.description} name="description" required/>
        </label>
        <label>
          Attack:
          <input type="number" defaultValue={character.attack_stat} name="attack" required/>
        </label>
        <label>
          Hit Points:
          <input type="number" defaultValue={character.health_stat} name="health" required/>
        </label>
        <button>UPDATE CHARACTER</button>
      </form>
    </>
  )
}