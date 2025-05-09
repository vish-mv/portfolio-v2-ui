// src/utils/chatbotTools.js
// This file defines the tool schemas and handlers for the chatbot

// Tool for changing theme
export const changeTheme = (themeName, setTheme) => {
    if (setTheme && typeof setTheme === 'function') {
      setTheme(themeName);
      return `Theme changed to ${themeName}`;
    }
    return 'Could not change theme';
  };
  
  // Tool for toggling dark mode
  export const toggleDarkMode = (setIsDarkMode) => {
    if (setIsDarkMode && typeof setIsDarkMode === 'function') {
      setIsDarkMode(prev => !prev);
      return 'Dark mode toggled';
    }
    return 'Could not toggle dark mode';
  };
  
  // Tool for navigating to sections
  export const navigateTo = (path, navigate) => {
    if (navigate && typeof navigate === 'function') {
      navigate(path);
      return `Navigating to ${path}`;
    }
    return 'Could not navigate';
  };
  
  // Tool for showing or hiding content
  export const toggleContent = (contentId, setVisibleContent) => {
    if (setVisibleContent && typeof setVisibleContent === 'function') {
      setVisibleContent(prev => {
        if (prev.includes(contentId)) {
          return prev.filter(id => id !== contentId);
        } else {
          return [...prev, contentId];
        }
      });
      return `Toggled visibility of ${contentId}`;
    }
    return 'Could not toggle content';
  };
  
  // Tool for resizing chatbot
  export const resizeChatbot = (size, setChatbotSize) => {
    if (setChatbotSize && typeof setChatbotSize === 'function' && ['small', 'medium', 'large'].includes(size)) {
      setChatbotSize(size);
      return `Chatbot resized to ${size}`;
    }
    return 'Could not resize chatbot';
  };
  
  // Tool for toggling fullscreen
  export const toggleFullscreen = (setIsFullscreen) => {
    if (setIsFullscreen && typeof setIsFullscreen === 'function') {
      setIsFullscreen(prev => !prev);
      return 'Fullscreen toggled';
    }
    return 'Could not toggle fullscreen';
  };
  
  // Tool for downloading resume
  export const downloadResume = () => {
    // In a real implementation, this would trigger a file download
    window.open('#', '_blank');
    return 'Resume download started';
  };
  
  // Mock function to simulate backend integration
  // In a real application, this would connect to your Python backend
  export const processChatbotMessage = async (message, tools) => {
    // Simple keyword-based handling for demo purposes
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('theme') || lowerMessage.includes('color')) {
      if (lowerMessage.includes('dark')) {
        return {
          text: "I've switched to dark mode for you.",
          toolCall: {
            tool: 'toggleDarkMode',
            args: []
          }
        };
      } else if (lowerMessage.includes('light')) {
        return {
          text: "I've switched to light mode for you.",
          toolCall: {
            tool: 'toggleDarkMode',
            args: []
          }
        };
      } else if (lowerMessage.includes('purple')) {
        return {
          text: "I've changed the theme to purple.",
          toolCall: {
            tool: 'changeTheme',
            args: ['purple']
          }
        };
      } else if (lowerMessage.includes('teal')) {
        return {
          text: "I've changed the theme to teal.",
          toolCall: {
            tool: 'changeTheme',
            args: ['teal']
          }
        };
      }
    }
    
    if (lowerMessage.includes('about') || lowerMessage.includes('who are you')) {
      return {
        text: "Let me take you to the About page.",
        toolCall: {
          tool: 'navigateTo',
          args: ['/about']
        }
      };
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return {
        text: "Here are the projects I've worked on.",
        toolCall: {
          tool: 'navigateTo',
          args: ['/projects']
        }
      };
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('expertise')) {
      return {
        text: "Let me show you my skills and expertise.",
        toolCall: {
          tool: 'navigateTo',
          args: ['/skills']
        }
      };
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return {
        text: "Here's how you can contact me.",
        toolCall: {
          tool: 'navigateTo',
          args: ['/contact']
        }
      };
    }
    
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return {
        text: "I'm downloading my resume for you.",
        toolCall: {
          tool: 'downloadResume',
          args: []
        }
      };
    }
    
    if (lowerMessage.includes('full') || lowerMessage.includes('screen')) {
      return {
        text: "I've toggled fullscreen mode.",
        toolCall: {
          tool: 'toggleFullscreen',
          args: []
        }
      };
    }
    
    if (lowerMessage.includes('small')) {
      return {
        text: "I've made the chatbot smaller.",
        toolCall: {
          tool: 'resizeChatbot',
          args: ['small']
        }
      };
    }
    
    if (lowerMessage.includes('large')) {
      return {
        text: "I've made the chatbot larger.",
        toolCall: {
          tool: 'resizeChatbot',
          args: ['large']
        }
      };
    }
    
    // Default response
    return {
      text: "I'm your portfolio assistant. I can help you navigate the site, change themes, and answer questions about Visal. What would you like to know?",
      toolCall: null
    };
  };