import useQuery from "/src/api/useQuery";
import { useParams } from "react-router";
import useMutation from "../api/useMutation";
import toastr from "toastr";
import 'toastr/build/toastr.min.css'


const AddCharacterSection = () => {
  const { id } = useParams();
  const { data: usersCharacters } = useQuery(`/characters`, `characters`);
  const { data: characters } = useQuery(`/sessions/${id}/characters`, `sessionCharacters`);
  const { mutate, error} = useMutation(`POST`, `/sessions/${id}/characters`, [`characters`, `sessionCharacters`]);
  
  if(error && error.includes(`already exists`)) {
    toastr.options.positionClass = `toast-top-center`;
    toastr.warning(`CHARACTER ALREADY IN A SESSION`);
  };
  
  const eventHandler = (event, character) => {
    event.preventDefault();
    addCharacter(character)
  }
  
  const addCharacter =  (character) => {
    if(!character) return null;
    const sessionId = id;
    const characterId = character.id;
    mutate({sessionId, characterId})
  }
  
  return (
    <>
      <h3>Select Your Characters</h3>

      <ul className="usersCharacter">
        {
          usersCharacters &&

          usersCharacters.map((character) => {
            return (
              <li key={character.id}>
                <a onClick={(event) => eventHandler(event, character)} href="">
                  {character.name}
                </a>
              </li>
            )
          })
        }
      </ul>

      <h3>Characters in Session</h3>
      <ul>
        {
          characters && 
          
          characters.map((character) => {
            return (
              <li key={character.id}>{character.name}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default AddCharacterSection;