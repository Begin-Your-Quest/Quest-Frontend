import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import { Link } from "react-router";

export const OneCharacter = () => {
  const { id } = useParams();
  const { data: character } = useQuery(`/characters/${id}`, `character`);
  if(!character) return null;
  return(
    <section className="singleChar">
      <Link to={"/characters"} className="back-arrow">← Back</Link>
      <h2>{character.name}</h2>
      <h3>Class: {character.class}</h3>
      <ul>
        <li id="attack">Attack: {character.attack_stat}</li>
        <li id="hp">Hit Points: {character.health_stat}</li>
      </ul>
      <p>{character.description}</p>
      <Link to={`/characters/${character.id}/skills`} id='skills'>Skills</Link>
      <Link to={`/characters/${character.id}/edit`}>EDIT</Link>
    </section>
  );
}