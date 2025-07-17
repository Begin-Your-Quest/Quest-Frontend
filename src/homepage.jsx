import { useNavigate } from 'react-router';
import ImageCarousel from "./layout/ImageCarousel.jsx";

export default function HomePage() {
  const navigate = useNavigate();

  const slides = [
    "/media/ClericImg.png",
    "/media/MageImg.png",
    "/media/RangerImg.png",
    "/media/RogueImg.png",
    "/media/WarriorImg.png",
  ];

  return (
    <div className="content">
      <div className="page-box">
        <h1>Welcome Adventurers</h1>
        <p>
          Begin Your Quest is a platform for tabletop RPG enthusiasts to create, manage, and share their adventures.
          Whether you're a seasoned Dungeon Master or a new player, BYQ has tools to enhance your gaming experience.  
          <br />
          <br />
          <button className="btn" onClick={() => navigate("/register")}>
            BEGIN YOUR QUEST
          </button>
        </p>
      </div>
      <div className="page-box">
        <ImageCarousel images={slides} interval={3000} />
      </div>
    </div>
  );
}
