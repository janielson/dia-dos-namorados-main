import { useState, useEffect, useRef } from "react";
import { Upload, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "../components/FloatingHearts";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [musicFile, setMusicFile] = useState<File | null>(null);
  const [musicUrl, setMusicUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const photos = [
    {
      id: 1,
      url: "/lovable-uploads/01c9c30f-1f6c-495c-8c2b-0f6a1bef6d5d.png",
      caption: "Nossos momentos únicos juntos ❤️"
    },
    {
      id: 2,
      url: "/lovable-uploads/a2ffd05b-ae9d-40a9-90d4-0342d2597ffc.png",
      caption: "Sorrisos que iluminam meus dias"
    },
    {
      id: 3,
      url: "/lovable-uploads/f70b4199-d148-4bcb-ab4e-6c2b24f3bcb7.png",
      caption: "Cada selfie conta nossa história"
    },
    {
      id: 4,
      url: "/lovable-uploads/27df5057-ee41-4b8f-a534-24ac08c148fc.png",
      caption: "Conectados mesmo de longe"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('audio/')) {
      console.log("Música selecionada:", file.name, "Tipo:", file.type);
      setMusicFile(file);
      
      if (musicUrl) {
        URL.revokeObjectURL(musicUrl);
      }
      
      const url = URL.createObjectURL(file);
      setMusicUrl(url);
      console.log("URL criada para o áudio:", url);
      
      setIsPlaying(false);
    } else {
      console.error("Arquivo selecionado não é um áudio válido");
      alert("Por favor, selecione um arquivo de áudio válido (MP3, WAV, etc.)");
    }
  };

  const togglePlay = async () => {
    if (!musicUrl) {
      alert("Por favor, carregue uma música primeiro");
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        console.log("Pausando música");
        audio.pause();
        setIsPlaying(false);
      } else {
        console.log("Iniciando reprodução da música");
        audio.src = musicUrl;
        audio.volume = 0.7;
        audio.loop = true;
        await audio.play();
        setIsPlaying(true);
        console.log("Música iniciada com sucesso");
      }
    } catch (error) {
      console.error("Erro ao reproduzir música:", error);
      alert("Erro ao reproduzir a música. Tente novamente.");
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      const newMutedState = !isMuted;
      audio.muted = newMutedState;
      setIsMuted(newMutedState);
      console.log("Mute alterado para:", newMutedState);
    }
  };

  useEffect(() => {
    return () => {
      if (musicUrl) {
        URL.revokeObjectURL(musicUrl);
      }
    };
  }, [musicUrl]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Images with Zoom Effect */}
      <div className="absolute inset-0">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center animate-zoom-slow"
              style={{
                backgroundImage: `url(${photo.url})`,
                filter: 'brightness(0.4)',
              }}
            />
          </div>
        ))}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <FloatingHearts />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        
        {/* Welcome Section */}
        <div className={`text-center transition-all duration-1000 mb-8 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-6xl mb-4 animate-heart-beat">❤️</div>
          <h1 className="text-4xl md:text-6xl font-dancing text-white mb-4 drop-shadow-2xl">
            Feliz Dia dos Namorados
          </h1>
        </div>

        {/* Love Letter Section */}
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl" style={{ boxShadow: '0 0 8px 2px #ff00cc66, 0 0 12px 3px #3333ff44, 0 0 4px 1px #fff3' }}>
            <h2 className="text-3xl md:text-4xl font-dancing text-white mb-6 drop-shadow-lg">
              Carta de Amor ✨
            </h2>
            
            <div className="space-y-4 text-white font-playfair text-base md:text-lg leading-relaxed">
              <p className="italic text-lg">
                "Amor da minha vida,
              </p>
              
              <p>
                Neste Dia dos Namorados, eu quis fazer algo diferente... Algo que tocasse seu coração.
              </p>
              
              <p>
                Cada momento ao seu lado é um presente que eu jamais poderia imaginar. O seu sorriso, sua força, seu carinho – são a razão pela qual eu me sinto completo.
              </p>
              
              <p>
                Esta página é apenas uma forma simbólica de mostrar o quanto você é especial para mim.
              </p>
              
              <p>
                Que a nossa história continue sendo escrita com amor, risos e momentos inesquecíveis.
              </p>
              
              <p className="text-pink-300 font-bold text-lg">
                Feliz Dia dos Namorados, meu amor.
              </p>
              
              <p className="italic text-yellow-300 text-lg text-center font-dancing" style={{ fontSize: '2rem', letterSpacing: '2px', marginTop: '2rem' }}>
                EU TE AMO 💖
              </p>
            </div>
          </div>
        </div>

        {/* Photo Indicators */}
        <div className="flex justify-center mt-8 transition-all duration-1000 delay-500">
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-lg font-dancing transition-all duration-300"
            style={{ boxShadow: '0 0 8px 2px #ff00cc66, 0 0 12px 3px #3333ff44, 0 0 4px 1px #fff3' }}
          >
            músicas que descreve você quando te olho
          </button>
        </div>

        {/* Interactive Elements */}
        <div className={`mt-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="text-4xl animate-bounce">💕</div>
                <div className="text-4xl animate-pulse">✨</div>
                <div className="text-4xl animate-bounce delay-150">💖</div>
                <div className="text-4xl animate-pulse delay-300">🌟</div>
                <div className="text-4xl animate-bounce delay-500">💝</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
