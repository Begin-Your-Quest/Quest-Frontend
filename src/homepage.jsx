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
        <button onClick={() => navigate('/sessions')} className="btn">
          View Sessions
        </button>
      </div>

      <div className="page-box">
        <ImageCarousel images={slides} interval={3000} />
      </div>
    </div>
  );
}
