import { Link } from "react-router";
import "./characters.css";
import useQuery  from "../api/useQuery.jsx";

export const AllCharacters = () => {
  
  const {
    data: characters
  } = useQuery("/characters","characters");
  return (
    <section>
      <h1>Characters</h1>

      <div className="charGridWrapper">
        <div className="charTile addCharTile">
          <Link to="/characters/new">
            <img src="/media/Add.png" alt="Add Character" />
          </Link>
        </div>

        <div className="charGrid">
          {characters && characters.map((character) => (
            <Link to={`/characters/${character.id}`} key={character.id} className="charTile">
              <span>{character.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}