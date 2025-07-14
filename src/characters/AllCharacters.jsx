import { Link } from "react-router";
import useQuery  from "../api/useQuery.jsx";

export const AllCharacters = () => {
  
  const {
    data: characters
  } = useQuery("/characters","characters");
  return (
    <>
      <h1>Characters</h1>
      <Link to={'/characters/new'}>+</Link>
      {characters && characters.map((character) => {
        return (
          <Link to={`/characters/${character.id}`} key={character.id}>{character.name}</Link>
        )
      })}
    </>
  );
}