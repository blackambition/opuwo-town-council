
import React, { useState, useRef, useEffect } from 'react';
import { chatWithCouncil } from '../services/geminiService';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean; sources?: any[] }[]>([
    { text: "Hello! I'm your Opuwo Digital Assistant. How can I help you with town services today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await chatWithCouncil(userMsg);
      setMessages(prev => [...prev, { 
        text: response.text || "I'm sorry, I couldn't process that.", 
        isBot: true,
        sources: response.sources
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Connection error. Please try again later.", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] shadow-2xl rounded-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-blue-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-blue-900">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm">Opuwo Resident AI</h4>
                <div className="flex items-center text-[10px] text-blue-200">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                  Online & Ready
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.isBot 
                    ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm' 
                    : 'bg-blue-600 text-white rounded-tr-none'
                }`}>
                  {m.text}
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                      Sources: {m.sources.map((s: any, idx) => (
                        <a key={idx} href={s.web?.uri} target="_blank" rel="noreferrer" className="block text-blue-500 hover:underline">
                          {s.web?.title || 'Council Reference'}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about bills, permits..."
                className="flex-grow bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition disabled:opacity-50"
              >
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-800 transition-all hover:scale-105 active:scale-95 group"
        >
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
          </div>
          <i className="fa-solid fa-comment-dots text-2xl group-hover:rotate-12 transition-transform"></i>
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
