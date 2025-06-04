
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel STB. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const predefinedResponses = {
    'bonjour': 'Bonjour ! Comment puis-je vous aider avec vos services bancaires STB ?',
    'services': 'Nos principaux services incluent : comptes particuliers, services entreprises, banque digitale, et investissements. Que souhaitez-vous savoir de plus ?',
    'compte': 'Pour ouvrir un compte STB, vous pouvez vous rendre dans l\'une de nos 120+ agences ou utiliser notre service en ligne. Quels documents avez-vous besoin ?',
    'carte': 'Nous proposons plusieurs types de cartes : carte de débit classique, carte Gold, et carte Platinum. Laquelle vous intéresse ?',
    'crédit': 'Nous offrons différents types de crédits : personnel, immobilier, et professionnel. Quel type de financement recherchez-vous ?',
    'agence': 'Nous avons plus de 120 agences à travers la Tunisie. Dans quelle région cherchez-vous une agence ?',
    'contact': 'Vous pouvez nous contacter au 71 340 733 ou par email à contact@stb.com.tn. Nos conseillers sont disponibles de 8h à 17h.',
    'default': 'Je comprends votre question. Pour une assistance personnalisée, je vous recommande de contacter nos conseillers au 71 340 733 ou de visiter votre agence STB la plus proche.'
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);

    // Find appropriate response
    const lowercaseInput = inputValue.toLowerCase();
    let response = predefinedResponses.default;

    for (const [key, value] of Object.entries(predefinedResponses)) {
      if (key !== 'default' && lowercaseInput.includes(key)) {
        response = value;
        break;
      }
    }

    // Simulate typing delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: response,
        isBot: true,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const quickActions = [
    'Ouvrir un compte',
    'Demander une carte',
    'Trouver une agence',
    'Services en ligne'
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full gradient-stb text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        size="lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <span className="text-2xl">💬</span>}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-96 h-[500px] shadow-2xl border-0 animate-scale-in">
          <CardHeader className="gradient-stb text-white">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🤖</span>
                <span>Assistant STB</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm opacity-90">En ligne</span>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'gradient-stb text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t bg-gray-50">
              <p className="text-xs text-gray-600 mb-2">Actions rapides :</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Button
                    key={action}
                    variant="outline"
                    size="sm"
                    className="text-xs h-8"
                    onClick={() => setInputValue(action)}
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Tapez votre message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="gradient-stb text-white"
                  size="icon"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
