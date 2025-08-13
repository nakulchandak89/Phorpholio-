import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { 
  Terminal, 
  Send, 
  Trash2, 
  Wifi, 
  Signal, 
  Battery,
  User,
  Mail,
  MessageSquare,
  ArrowLeft
} from 'lucide-react';
import GlassIcons from '../utils/GlassIcons';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  type: 'system' | 'user' | 'input';
  timestamp: Date;
}

const glassItems = [
  { icon: <FiGithub />, color: 'blue', label: 'GitHub', link: 'https://github.com/nakulchandak89' },
  { icon: <FiLinkedin />, color: 'indigo', label: 'LinkedIn', link: 'https://www.linkedin.com/in/nakul-chandak-7280151b8' },
  { icon: <FiInstagram />, color: 'purple', label: 'Instagram', link: 'https://www.instagram.com/nakul_chandak_/' },
];

export default function ConnectMePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [step, setStep] = useState<'connecting' | 'name' | 'email' | 'message' | 'confirm' | 'complete'>('connecting');
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  // Set up intersection observer to detect when terminal is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTerminalVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Terminal is considered visible when 20% is in viewport
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
    };
  }, []);

  // Initialize terminal when it becomes visible or is hovered
  useEffect(() => {
    const initializeTerminal = async () => {
      if (hasInitialized) return; // Prevent multiple initializations

      setHasInitialized(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      addMessage('> Initializing secure connection...', 'system');
      await new Promise(resolve => setTimeout(resolve, 1500));
      addMessage('> Connecting to mrchandler\'s.exe...', 'system');
      await new Promise(resolve => setTimeout(resolve, 1000));
      addMessage('> Handshake established ✓', 'system');
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsConnected(true);
      addMessage('> Connection established successfully!', 'system');
      await new Promise(resolve => setTimeout(resolve, 1000));
      addMessage('> Welcome to the mrchandler\'s Communication Terminal', 'system');
      await new Promise(resolve => setTimeout(resolve, 800));
      addMessage('> Please identify yourself to proceed...', 'system');
      await new Promise(resolve => setTimeout(resolve, 500));
      addMessage('> What should I call you, fellow explorer?', 'system');
      setStep('name');
    };

    // Start initialization if terminal is visible or being hovered
    if (isTerminalVisible || isHovering) {
      initializeTerminal();
    }
  }, [isTerminalVisible, isHovering, hasInitialized]);

  const addMessage = (text: string, type: Message['type']) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      type,
      timestamp: new Date()
    };
    setMessages(prev => {
      // Prevent duplicate messages by checking if the same text and type already exists
      if (prev.length > 0 && prev[prev.length - 1].text === text && prev[prev.length - 1].type === type) {
        return prev;
      }
      return [...prev, message];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentInput.trim()) return;

    // Add user input only once
    addMessage(`> ${currentInput}`, 'user');

    const input = currentInput.trim();
    setCurrentInput('');

    switch (step) {
      case 'name':
        setFormData(prev => ({ ...prev, name: input }));
        await new Promise(resolve => setTimeout(resolve, 800));
        addMessage(`> Nice to meet you, ${input}! 👋`, 'system');
        await new Promise(resolve => setTimeout(resolve, 1000));
        addMessage('> I\'ll need your email address for my response beacon...', 'system');
        setStep('email');
        break;

      case 'email':
        if (!input.includes('@')) {
          await new Promise(resolve => setTimeout(resolve, 500));
          addMessage('> That doesn\'t look like a valid email address...', 'system');
          await new Promise(resolve => setTimeout(resolve, 800));
          addMessage('> Please enter a valid email (e.g., you@example.com):', 'system');
          return;
        }

        setFormData(prev => ({ ...prev, email: input }));
        await new Promise(resolve => setTimeout(resolve, 800));
        addMessage('> Email beacon configured ✓', 'system');
        await new Promise(resolve => setTimeout(resolve, 1000));
        addMessage('> Now, what\'s on your mind? Share your thoughts, ideas, or questions...', 'system');
        setStep('message');
        break;

      case 'message':
        setFormData(prev => ({ ...prev, message: input }));
        await new Promise(resolve => setTimeout(resolve, 800));
        addMessage('> Message received and processed ✓', 'system');
        await new Promise(resolve => setTimeout(resolve, 1000));
        addMessage('> Let me confirm your transmission details:', 'system');
        await new Promise(resolve => setTimeout(resolve, 800));
        addMessage(`> Name: ${formData.name}`, 'system');
        addMessage(`> Email: ${formData.email}`, 'system');
        addMessage(`> Message: ${input}`, 'system');
        await new Promise(resolve => setTimeout(resolve, 1000));
        addMessage('> Type "SEND" to transmit, or "EDIT" to modify:', 'system');
        setStep('confirm');
        break;

      case 'confirm':
        if (input.toLowerCase() === 'send') {
          await new Promise(resolve => setTimeout(resolve, 800));
          addMessage('> Transmitting message through quantum channels...', 'system');
          await new Promise(resolve => setTimeout(resolve, 1500));
          addMessage('> Message successfully delivered! ✓', 'system');
          await new Promise(resolve => setTimeout(resolve, 1000));
          addMessage('> mrchandler\'s will respond to your beacon within 24 hours.', 'system');
          await new Promise(resolve => setTimeout(resolve, 800));
          addMessage('> Thank you for reaching out, space explorer! 🚀', 'system');

          toast.success('Message transmitted successfully!', {
            style: {
              background: '#0d0d0d',
              color: '#00ff99',
              border: '1px solid #00ff99',
            },
            iconTheme: {
              primary: '#ededed',
              secondary: '#0d0d0d',
            },
          });

          setStep('complete');
        } else if (input.toLowerCase() === 'edit') {
          await new Promise(resolve => setTimeout(resolve, 500));
          addMessage('> Returning to message input...', 'system');
          await new Promise(resolve => setTimeout(resolve, 800));
          addMessage('> Please enter your updated message:', 'system');
          setStep('message');
        } else {
          await new Promise(resolve => setTimeout(resolve, 500));
          addMessage('> Invalid command. Please type "SEND" or "EDIT":', 'system');
        }
        break;

      case 'complete':
        addMessage('> Session already completed. Refreshing terminal...', 'system');
        setTimeout(() => {
          // Reload the current page to reset the terminal
          window.location.reload();
        }, 2000);
        break;
    }
  };

  const clearTerminal = () => {
    setMessages([]);
    setFormData({ name: '', email: '', message: '' });
    setStep('connecting');
    setIsConnected(false);
    setCurrentInput('');
    setHasInitialized(false); // Reset initialization state

    // Only reinitialize if terminal is still visible or being hovered
    if (isTerminalVisible || isHovering) {
      setTimeout(() => {
        const initializeTerminal = async () => {
          await new Promise(resolve => setTimeout(resolve, 500));
          addMessage('> Terminal cleared. Reconnecting...', 'system');
          await new Promise(resolve => setTimeout(resolve, 1000));
          setIsConnected(true);
          addMessage('> Connection re-established ✓', 'system');
          await new Promise(resolve => setTimeout(resolve, 800));
          addMessage('> What should I call you, fellow explorer?', 'system');
          setStep('name');
        };

        initializeTerminal();
      }, 500);
    }
  };

  const getPromptText = () => {
    switch (step) {
      case 'connecting': return 'Connecting...';
      case 'name': return 'Name';
      case 'email': return 'Email';
      case 'message': return 'Message';
      case 'confirm': return 'Command';
      case 'complete': return 'Complete';
      default: return 'Input';
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white font-inter py-20">
      <style>
        {`
          .text-neon { color: #00ff99; }
          .bg-neon { background-color: #00ff99; }
          .text-plasma { color: #ff00ff; }
          .bg-plasma { background-color: #ff00ff; }
          .bg-void { background-color: #0d0d0d; }
          .bg-dark-gray { background-color: #1a1a1a; }
          .text-glitch { color: #ff0000; }
          .bg-glitch { background-color: #ff0000; }
          .text-terminal { color: #00ff99; }
          .bg-light-gray { background-color: #2a2a2a; }
        `}
      </style>
      <Toaster position="top-right" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-neon hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Terminal className="w-8 h-8 text-neon animate-pulse" />
            <h2 className="font-pixel text-4xl md:text-5xl font-bold text-metallic mb-6">
              Communication Terminal
            </h2>
            <Terminal className="w-8 h-8 text-neon animate-pulse" />
          </div>
          <p className="font-mono text-xl text-gray-300 max-w-2xl mx-auto">
            Establish secure connection to transmit your message
          </p>
          {!hasInitialized && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-sm text-neon mt-2 max-w-2xl mx-auto"
            >
              Hover over terminal or scroll to this section to activate
            </motion.p>
          )}
        </motion.div>

        {/* Terminal window */}
        <motion.div
          ref={terminalRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ boxShadow: "0 0 20px rgba(0, 255, 153, 0.5)" }}
          transition={{ 
            duration: 0.6,
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="bg-void border-2 border-neon/30 rounded-xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Terminal header */}
          <div className="bg-dark-gray border-b border-neon/20 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-glitch rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-neon rounded-full"></div>
              </div>
              <span className="font-mono text-sm text-gray-400">
               mrchandler's@terminal:~$
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Signal className={`w-4 h-4 ${isConnected ? 'text-neon' : 'text-gray-600'}`} />
                <Wifi className={`w-4 h-4 ${isConnected ? 'text-neon' : 'text-gray-600'}`} />
                <Battery className="w-4 h-4 text-red-500" />
              </div>

              <button
                onClick={clearTerminal}
                className="text-gray-400 hover:text-glitch transition-colors"
                title="Clear terminal"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal content */}
          <div className="h-96 bg-void p-4 overflow-y-auto font-mono text-sm">
            <div className="space-y-2">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${
                    message.type === 'system' 
                      ? 'text-neon' 
                      : message.type === 'user'
                      ? 'text-plasma'
                      : 'text-gray-400'
                  }`}
                >
                  {message.text}
                </motion.div>
              ))}

              {/* Input line */}
              {step !== 'complete' && isConnected && (
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-terminal">mrchandler@{getPromptText().toLowerCase()}:~$</span>
                  <div className="flex-1 relative">
                    <span className="text-white">{currentInput}</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-neon"
                    >
                      ▊
                    </motion.span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          {step !== 'complete' && isConnected && (
            <form onSubmit={handleSubmit} className="border-t border-neon/20 bg-dark-gray p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {step === 'name' && <User className="w-4 h-4 text-neon" />}
                  {step === 'email' && <Mail className="w-4 h-4 text-neon" />}
                  {step === 'message' && <MessageSquare className="w-4 h-4 text-neon" />}
                  {(step === 'confirm' /* || step === 'complete' */) && <Terminal className="w-4 h-4 text-neon" />}
                </div>

                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  placeholder={`Enter ${getPromptText().toLowerCase()}...`}
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none font-mono"
                  disabled={!isConnected}
                />

                <button
                  type="submit"
                  disabled={!currentInput.trim() || !isConnected}
                  className="px-4 py-2 bg-neon text-void rounded hover:bg-plasma hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-mono font-bold"
                >
                  <Send className="w-4 h-4" />
                  SEND
                </button>
              </div>
            </form>
          )}

          {/* Complete state */}
          {step === 'complete' && (
            <div className="border-t border-neon/20 bg-dark-gray p-4 text-center">
              <span className="font-mono text-neon">
                ✓ Transmission complete. Session ended.
              </span>
              <button
                onClick={() => {
                  // Reload the current page to reset the terminal
                  window.location.reload();
                }}
                className="ml-4 px-4 py-2 bg-light-gray text-neon rounded hover:bg-neon hover:text-void transition-all duration-300 font-mono"
              >
                New Session
              </button>
            </div>
          )}
        </motion.div>

        {/* Connection status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono ${
            isConnected ? 'bg-neon/20 text-neon' : 'bg-gray-800 text-gray-400'
          }`}>
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-neon animate-pulse' : 'bg-gray-600'}`}></div>
            {isConnected ? "Connected to mrchandler's Terminal" : 'Establishing connection...'}
          </div>
        </motion.div>

        {/* Social Media Links as Glass Icons */}
        <div className="flex justify-center mt-8">
          <GlassIcons
            items={glassItems.map(item => ({
              ...item,
              onClick: () => window.open(item.link, '_blank')
            }))}
            className="gap-8"
          />
        </div>
      </div>
    </div>
  );
}
