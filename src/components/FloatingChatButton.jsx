import React, { useState, useRef, useEffect } from 'react';
import { MessageCircleIcon, XIcon, SendIcon, PhoneIcon } from 'lucide-react';

const CUSTOMER_CARE_NUMBER = '(234) 906-0475-561';
const CHATBOT_WELCOME = 'Hi! How can we help you today?';

const FloatingChatButton = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: CHATBOT_WELCOME }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  // Simulate bot response (replace with API integration for real backend)
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { sender: 'bot', text: "We're here to help! For urgent support, call us at " + CUSTOMER_CARE_NUMBER }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#0a2c5e] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#e6c200] animate-bounce"
        style={{ animation: 'pulse 2s infinite' }}
        aria-label="Live Chat Support"
        onClick={() => setOpen(true)}
      >
        <MessageCircleIcon className="w-8 h-8 text-white" />
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-0 right-0 z-50 w-full max-w-sm md:max-w-md bg-white shadow-2xl rounded-t-lg border-t border-[#e6c200] flex flex-col animate-slideIn" style={{ minHeight: '400px', maxHeight: '80vh' }}>
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a2c5e] rounded-t-lg">
            <span className="text-white font-semibold">Customer Care</span>
            <button onClick={() => setOpen(false)} aria-label="Close Chat">
              <XIcon className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-lg text-sm max-w-xs ${msg.sender === 'user' ? 'bg-[#e6c200] text-[#0a2c5e]' : 'bg-[#0a2c5e] text-white'}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex items-center px-4 py-3 border-t bg-gray-50">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e6c200] text-gray-800"
              placeholder="Type your message..."
              autoFocus
            />
            <button type="submit" className="ml-2 px-3 py-2 rounded-md bg-[#e6c200] text-[#0a2c5e] hover:bg-[#ffda22] transition-colors">
              <SendIcon className="w-5 h-5" />
            </button>
          </form>
          <div className="px-4 py-2 text-center text-xs text-gray-500 bg-gray-50 border-t">
            <span>Need human help? <a href={`tel:${CUSTOMER_CARE_NUMBER.replace(/[^\d+]/g, '')}`} className="text-[#0a2c5e] font-semibold inline-flex items-center"><PhoneIcon className="w-4 h-4 mr-1" />Call Us</a></span>
          </div>
        </div>
      )}
      {/* Keyframes for pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(230,194,0,0.7); }
          70% { box-shadow: 0 0 0 16px rgba(230,194,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(230,194,0,0); }
        }
        .animate-slideIn {
          animation: slideIn 0.4s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slideIn {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default FloatingChatButton;
