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

  mediaCss
  return (
    <div className="content">

      <div className="page-box">
        <h1>Welcome Adventurers</h1>
        <button onClick={() => navigate('/sessions')} className="btn">
          View Sessions
        </button>

      <div className="content">
        <h1>Welcome Adventurers!!</h1>
        <p>Begin Your Quest...</p>
main
      </div>

      <div className="page-box">
        <ImageCarousel images={slides} interval={3000} />
      </div>
    </div>
  );
}
