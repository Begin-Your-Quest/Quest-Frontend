import { useEffect, useRef } from "react";

export default function BackgroundMedia() {
  const audioRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;

  audio.muted = true;
     audio.volume = 1;
    audio.play().then(() => {
   
      const onFirstClick = () => {
        audio.muted = false;          
        document.removeEventListener("click", onFirstClick);
      };
      document.addEventListener("click", onFirstClick);
    });
  }, []);

  return (
    <>
      <video
        className="bg-video"
        src="/media/bg-video.mp4"
        autoPlay
        loop
        playsInline
      />
      <audio
        ref={audioRef}
        className="bg-audio"
        src="/media/BGaudio.mp3"
        autoPlay
        loop
      />
    </>
  );
}
