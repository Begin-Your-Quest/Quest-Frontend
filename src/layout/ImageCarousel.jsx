import { useState, useEffect } from "react";

export default function ImageCarousel({ images, interval = 4000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Slide ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}
