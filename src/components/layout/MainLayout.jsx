// src/components/layout/MainLayout.jsx
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../themes/ThemeContext';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;
`;

const PortfolioSection = styled.main`
  flex: ${props => props.fullscreen ? '1' : '0.6'};
  overflow-y: auto;
  padding: 2rem;
  transition: flex 0.3s ease;
`;

const ChatbotSection = styled.aside`
  flex: ${props => props.isVisible ? '0.4' : '0'};
  background-color: ${props => props.theme.colors.chatBackground};
  border-left: 1px solid ${props => props.theme.colors.border};
  overflow-y: auto;
  transition: flex 0.3s ease;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const MainLayout = ({ children }) => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(true);
  const { theme } = useContext(ThemeContext);
  
  return (
    <LayoutContainer theme={theme}>
      <PortfolioSection fullscreen={!isChatbotVisible} theme={theme}>
        {children}
      </PortfolioSection>
      
      <ChatbotSection isVisible={isChatbotVisible} theme={theme}>
        {/* Chatbot component will go here */}
        <h2>AI Assistant</h2>
        <p>Chatbot interface coming soon...</p>
      </ChatbotSection>
      
      <ToggleButton 
        onClick={() => setIsChatbotVisible(!isChatbotVisible)}
        theme={theme}
      >
        {isChatbotVisible ? '👈' : '💬'}
      </ToggleButton>
    </LayoutContainer>
  );
};

export default MainLayout;