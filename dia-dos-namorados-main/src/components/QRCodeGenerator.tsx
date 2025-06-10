
import { ArrowLeft, QrCode, Download, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface QRCodeGeneratorProps {
  onBack: () => void;
}

const QRCodeGenerator = ({ onBack }: QRCodeGeneratorProps) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const generateQRCode = () => {
    // Using QR Server API to generate QR code
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentUrl)}&bgcolor=ffffff&color=be123c`;
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = generateQRCode();
    link.download = 'qr-code-dia-dos-namorados.png';
    link.click();
  };

  const shareQR = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Feliz Dia dos Namorados ❤️',
          text: 'Uma surpresa especial para você!',
          url: currentUrl,
        });
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Link copiado para a área de transferência!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl mx-auto animate-fade-in text-center">
        <Button
          onClick={onBack}
          className="mb-6 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 rounded-full"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar
        </Button>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <QrCode className="mx-auto text-valentine-600 mb-6 animate-heart-beat" size={50} />
          
          <h1 className="text-3xl md:text-4xl font-dancing text-valentine-800 mb-6">
            Compartilhe o Amor
          </h1>
          
          <p className="text-lg text-valentine-700 font-playfair mb-8">
            Gere um QR Code para compartilhar esta experiência romântica com alguém especial
          </p>
          
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-inner">
            <img
              src={generateQRCode()}
              alt="QR Code para a página romântica"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-valentine-600 font-playfair">
              Escaneie este QR Code para acessar a surpresa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={downloadQR}
                className="bg-valentine-600 hover:bg-valentine-700 text-white rounded-full px-6 py-3 font-playfair"
              >
                <Download className="mr-2" size={20} />
                Baixar QR Code
              </Button>
              
              <Button
                onClick={shareQR}
                className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 py-3 font-playfair"
              >
                <Share className="mr-2" size={20} />
                Compartilhar
              </Button>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-valentine-50 rounded-xl">
            <p className="text-xs text-valentine-600 font-playfair">
              Link da página: <br />
              <span className="break-all font-mono text-valentine-800">{currentUrl}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
