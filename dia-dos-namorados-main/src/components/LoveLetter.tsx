
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoveLetterProps {
  onBack: () => void;
}

const LoveLetter = ({ onBack }: LoveLetterProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <Button
          onClick={onBack}
          className="mb-6 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 rounded-full"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar
        </Button>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <Heart className="mx-auto text-valentine-600 mb-4 animate-heart-beat" size={50} />
            <h1 className="text-3xl md:text-5xl font-dancing text-valentine-800 mb-4">
              Carta de Amor
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="font-dancing text-xl md:text-2xl text-valentine-800 leading-relaxed space-y-6">
              <p className="mb-6">Meu amor,</p>
              
              <p>
                Quando acordo todas as manhãs e vejo seu rosto, lembro-me de como sou sortudo(a) por ter você em minha vida. 
                Cada dia ao seu lado é uma nova oportunidade de amar e ser amado(a) de uma forma que eu nunca pensei ser possível.
              </p>
              
              <p>
                Você não é apenas meu(minha) namorado(a), você é meu melhor amigo(a), meu confidente, 
                minha fonte de força e alegria. Com você, descobri o verdadeiro significado do amor incondicional.
              </p>
              
              <p>
                Suas características únicas – seu jeito de sorrir quando está concentrado(a), 
                a forma como você me abraça quando preciso de conforto, sua risada contagiante – 
                são pequenos tesouros que guardo com carinho no meu coração.
              </p>
              
              <p>
                Quero que saiba que você é minha inspiração diária. Nos momentos difíceis, 
                penso em você e encontro forças para continuar. Nos momentos felizes, 
                você multiplica minha alegria simplesmente por estar ao meu lado.
              </p>
              
              <p>
                Neste Dia dos Namorados, prometo continuar amando você com toda a intensidade do meu ser, 
                apoiando seus sonhos, celebrando suas conquistas e caminhando junto com você em direção ao nosso futuro.
              </p>
              
              <p className="text-2xl font-bold text-valentine-700 text-center mt-8">
                Você é meu para sempre, e eu sou seu(sua) para sempre.
              </p>
              
              <div className="text-right mt-8">
                <p className="italic">Com todo meu amor,</p>
                <p className="font-bold text-valentine-700">[Seu Nome]</p>
                <p className="text-sm text-valentine-600">Dia dos Namorados {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
