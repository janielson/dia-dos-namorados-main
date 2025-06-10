
import { ArrowLeft, Camera, Upload, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PhotoGalleryProps {
  onBack: () => void;
}

const PhotoGallery = ({ onBack }: PhotoGalleryProps) => {
  const [photos] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      caption: "Nosso primeiro encontro"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop",
      caption: "Uma noite especial"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
      caption: "Caminhada romântica"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
      caption: "Momento perfeito"
    }
  ]);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <Button
          onClick={onBack}
          className="mb-6 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 rounded-full"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar
        </Button>
        
        <div className="text-center mb-8">
          <Camera className="mx-auto text-white mb-4 animate-heart-beat" size={50} />
          <h1 className="text-3xl md:text-5xl font-dancing text-white mb-4 drop-shadow-lg">
            Nossa Galeria de Momentos
          </h1>
          <p className="text-xl text-white/90 font-playfair">
            Cada foto conta uma história do nosso amor
          </p>
        </div>
        
        {/* Upload Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-white/20 text-center">
          <Upload className="mx-auto text-white mb-3" size={40} />
          <p className="text-white font-playfair mb-4">
            Envie suas fotos especiais do casal para completar nossa galeria
          </p>
          <Button className="bg-valentine-600 hover:bg-valentine-700 text-white rounded-full px-6 py-2">
            Enviar Fotos
          </Button>
        </div>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Heart className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-heart-beat" size={24} />
              </div>
              <div className="p-6 text-center">
                <p className="text-white font-dancing text-lg">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-white/80 font-dancing text-lg italic">
            "Um dia vamos olhar para essas fotos e lembrar de como éramos jovens e apaixonados... 
            Bom, ainda somos apaixonados! ❤️"
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
