import useQuery from "/src/api/useQuery";
import { useParams } from "react-router";
import useMutation from "../api/useMutation";


const AddCharacterSection = () => {
  const { id } = useParams();
  const { data: usersCharacters } = useQuery(`/characters`, `characters`);
  const { data: characters } = useQuery(`/sessions/${id}/characters`, `sessionCharacters`);
  const { mutate, error} = useMutation(`POST`, `/sessions/${id}/characters`, [`characters`, `sessionCharacters`]);
  
  if(error && error.includes(`already exists`)) {
    alert(`CHARACTER ALREADY IN SESSION`)
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

      <ul>
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