"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconSend, IconBrain } from '@tabler/icons-react';
import chatData from '@/app/data/chatData.json';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function RakshaAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm KIT – Krushna's Digital Brain. Ask me about his skills, projects, or anything else!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestMatch = (userInput: string) => {
    const input = userInput.toLowerCase();
    const faqs = chatData.faqs;
    
    for (const faq of faqs) {
      const questionWords = faq.question.toLowerCase().split(' ');
      const hasMatch = questionWords.some(word => input.includes(word));
      if (hasMatch) return faq.answer;
    }
    
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! I'm here to help you learn about Krushna and his work. What would you like to know?";
    }
    
    return "I'm not sure about that specific question. Try asking about Krushna's projects, skills, certifications, or contact information!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestMatch(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* AI Chat Widget - Fixed Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 rounded-full hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 ${isOpen ? 'hidden' : 'flex'}`}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Robot/Brain Icon */}
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <IconBrain size={18} className="text-white" />
            </div>
            
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-blue-400/30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* AI Image and Text */}
          <div className="flex items-center gap-3">
            <img 
              src="/ai.jpg" 
              alt="KIT - Krushna's Digital Brain" 
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-400/50"
            />
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-sm">
                💡 Hi! I&apos;m KIT – Krushna&apos;s Digital Brain
              </span>
              <motion.span
                className="text-blue-400 text-lg"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </div>
          </div>
        </motion.button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -100, y: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -100, y: 100 }}
            className="fixed bottom-24 left-6 z-50 w-96 h-[500px] bg-black/90 backdrop-blur-md border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-blue-500/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <IconBrain size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">KIT Assistant</div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
              >
                <IconX size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto h-[360px] scrollbar-thin scrollbar-thumb-blue-500/30 scrollbar-track-transparent">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block max-w-[85%] p-3 rounded-2xl text-sm ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-md'
                        : 'bg-white/10 text-white border border-white/20 rounded-bl-md'
                    }`}
                  >
                    {message.text}
                  </div>
                  <div className={`text-xs text-white/50 mt-1 ${message.isUser ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-blue-500/20 bg-black/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Krushna..."
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                />
                <motion.button
                  onClick={handleSendMessage}
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconSend size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
