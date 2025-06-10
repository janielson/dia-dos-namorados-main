
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // URL de uma música romântica de exemplo (você pode substituir por sua música)
  const musicUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"; // Substitua por sua música

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = 0.3; // Volume baixo para não incomodar
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => {
          console.log("Erro ao reproduzir música:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} preload="metadata">
        <source src={musicUrl} type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/30">
        <div className="flex items-center space-x-2">
          <Button
            onClick={togglePlay}
            size="sm"
            className="bg-transparent hover:bg-white/20 text-white border-0 rounded-full p-2"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </Button>
          
          <Button
            onClick={toggleMute}
            size="sm"
            className="bg-transparent hover:bg-white/20 text-white border-0 rounded-full p-2"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </Button>
        </div>
      </div>
      
      <div className="text-xs text-white/80 mt-2 text-center font-playfair">
        🎵 Música Romântica
      </div>
    </div>
  );
};

export default MusicPlayer;
