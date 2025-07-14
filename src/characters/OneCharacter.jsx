import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import { Link } from "react-router";

export const OneCharacter = () => {
  const { id } = useParams();
  const { data: character } = useQuery(`/characters/${id}`, `character`);
  if(!character) return null;
  return(
    <>
      <h2>{character.name}</h2>
      <p>{character.id}</p>
      <h3>{character.class}</h3>
      <ul>
        <li>Attack: {character.attack_stat}</li>
        <li>Hit Points: {character.health_stat}</li>
      </ul>
      <p>{character.description}</p>
      <Link to={`/characters/${character.id}/edit`}>EDIT</Link>
    </>
  );
}