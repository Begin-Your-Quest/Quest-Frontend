import { useParams } from "react-router"
import useMutation from "/src/api/useMutation"

const RemoveButton = ({character}) => {
  const { id } = useParams();
  const { mutate } = useMutation(`DELETE`, `/sessions/${id}/characters`, [`sessionCharacters`]);

  const eventHandler = (event, character) => {
    event.preventDefault();
    removeCharacter(character)
  }

  const removeCharacter = (character) => {
    if(!character) return null
    const characterId = character.id;
    mutate({characterId});
  }

  return (
    <button onClick={(event) => eventHandler(event, character)} className="removeButton">
      Remove
    </button>
  )
}

export default RemoveButton