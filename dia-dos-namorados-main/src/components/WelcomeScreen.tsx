
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onEnter: () => void;
  isLoaded: boolean;
}

const WelcomeScreen = ({ onEnter, isLoaded }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <Heart className="mx-auto text-white mb-4 animate-heart-beat" size={80} />
          <h1 className="text-5xl md:text-7xl font-dancing text-white mb-4 drop-shadow-lg">
            Feliz Dia dos Namorados
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-playfair mb-8">
            Uma surpresa especial feita com amor
          </p>
        </div>
        
        <Button
          onClick={onEnter}
          className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 transition-all duration-300 px-8 py-4 text-lg font-playfair rounded-full shadow-lg hover:shadow-xl hover:scale-105"
        >
          Entrar ❤️
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
