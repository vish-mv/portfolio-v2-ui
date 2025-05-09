// src/components/chatbot/Chatbot.jsx
import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../themes/ThemeContext';
import { processChatbotMessage, changeTheme, toggleDarkMode, navigateTo, downloadResume } from '../../utils/chatbotTools';

const ChatbotContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
`;

const ChatHeader = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  margin-bottom: 1rem;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
`;

const MessageBubble = styled.div`
  background-color: ${props => props.isUser ? props.theme.colors.primary : props.theme.colors.cardBackground};
  color: ${props => props.isUser ? '#fff' : props.theme.colors.text};
  padding: 0.8rem 1rem;
  border-radius: 1rem;
  margin-bottom: 0.8rem;
  max-width: 80%;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text};
  outline: none;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SendButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hi, I'm your portfolio assistant! I can help you navigate the site, change themes, and answer questions. Try asking me to change the theme, show your projects, or tell me about yourself.", isUser: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { theme, changeTheme: setTheme, toggleDarkMode: setIsDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setIsLoading(true);
    
    try {
      // Process message with our mock backend
      const response = await processChatbotMessage(input, {
        changeTheme,
        toggleDarkMode,
        navigateTo,
        downloadResume
      });
      
      // Add response message
      setMessages(prev => [...prev, { text: response.text, isUser: false }]);
      
      // Execute tool call if available
      if (response.toolCall) {
        const { tool, args } = response.toolCall;
        
        switch (tool) {
          case 'changeTheme':
            setTheme(args[0]);
            break;
          case 'toggleDarkMode':
            setIsDarkMode(prev => !prev);
            break;
          case 'navigateTo':
            navigate(args[0]);
            break;
          case 'downloadResume':
            // This would actually trigger a download in a real implementation
            window.open('#', '_blank');
            break;
          // Additional tools would be handled here
          default:
            break;
        }
      }
    } catch (error) {
      console.error('Error processing message:', error);
      setMessages(prev => [...prev, { 
        text: "Sorry, I encountered an error. Please try again.", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ChatbotContainer>
      <ChatHeader theme={theme}>
        <h2>AI Assistant</h2>
      </ChatHeader>
      
      <MessagesContainer>
        <MessagesWrapper>
          {messages.map((message, index) => (
            <MessageBubble 
              key={index} 
              isUser={message.isUser}
              theme={theme}
            >
              {message.text}
            </MessageBubble>
          ))}
          {isLoading && (
            <MessageBubble theme={theme}>
              Thinking...
            </MessageBubble>
          )}
          <div ref={messagesEndRef} />
        </MessagesWrapper>
      </MessagesContainer>
      
      <InputContainer>
        <Input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          theme={theme}
          disabled={isLoading}
        />
        <SendButton onClick={handleSend} theme={theme} disabled={isLoading}>
          ➤
        </SendButton>
      </InputContainer>
    </ChatbotContainer>
  );
};

export default Chatbot;