
import { Heart, Camera, QrCode, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MainContentProps {
  onShowLetter: () => void;
  onShowGallery: () => void;
  onShowQR: () => void;
}

const MainContent = ({ onShowLetter, onShowGallery, onShowQR }: MainContentProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <Heart className="mx-auto text-white mb-6 animate-heart-beat" size={60} />
        
        <h1 className="text-4xl md:text-6xl font-dancing text-white mb-8 drop-shadow-lg">
          Amor da minha vida
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8 shadow-2xl border border-white/20">
          <p className="text-lg md:text-xl text-white font-dancing leading-relaxed mb-6">
            Neste Dia dos Namorados, eu quis fazer algo diferente… Algo que tocasse seu coração.
          </p>
          
          <p className="text-lg md:text-xl text-white font-dancing leading-relaxed mb-6">
            Cada momento ao seu lado é um presente que eu jamais poderia imaginar. O seu sorriso, 
            sua força, seu carinho – são a razão pela qual eu me sinto completo.
          </p>
          
          <p className="text-lg md:text-xl text-white font-dancing leading-relaxed mb-6">
            Esta página é apenas uma forma simbólica de mostrar o quanto você é especial para mim.
          </p>
          
          <p className="text-lg md:text-xl text-white font-dancing leading-relaxed mb-6">
            Que a nossa história continue sendo escrita com amor, risos e momentos inesquecíveis.
          </p>
          
          <p className="text-xl md:text-2xl text-white font-dancing font-bold mb-4">
            Feliz Dia dos Namorados, meu amor.
          </p>
          
          <p className="text-lg text-white font-dancing italic">
            Para sempre seu(a),<br />
            <span className="font-bold">[Seu Nome]</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Button
            onClick={onShowLetter}
            className="bg-valentine-600 hover:bg-valentine-700 text-white border-0 py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-playfair"
          >
            <Mail className="mr-2" size={20} />
            Carta de Amor
          </Button>
          
          <Button
            onClick={onShowGallery}
            className="bg-rose-500 hover:bg-rose-600 text-white border-0 py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-playfair"
          >
            <Camera className="mr-2" size={20} />
            Nossa Galeria
          </Button>
          
          <Button
            onClick={onShowQR}
            className="bg-gold-500 hover:bg-gold-600 text-white border-0 py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-playfair"
          >
            <QrCode className="mr-2" size={20} />
            Gerar QR Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
