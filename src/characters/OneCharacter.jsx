import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import { Link } from "react-router";

export const OneCharacter = () => {
  const { id } = useParams();
  const { data: character } = useQuery(`/characters/${id}`, `character`);
  if(!character) return null;
  return(
    <section className="singleChar">
      <h2>{character.name}</h2>
      <h3>{character.class}</h3>
      <img src="" alt="Char Img"/>
      <ul>
        <li id="attack">Attack: {character.attack_stat}</li>
        <li id="hp">Hit Points: {character.health_stat}</li>
      </ul>
      <p>{character.description}</p>
      <section id="skills">Skills</section>
      <Link to={`/characters/${character.id}/edit`}>EDIT</Link>
    </section>
  );
}