// src/pages/Home.jsx
import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../themes/ThemeContext';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.secondary};
`;

const ThemeButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ThemeButton = styled.button`
  background-color: ${props => props.color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${props => props.isActive ? '#fff' : 'transparent'};
  box-shadow: ${props => props.isActive ? '0 0 0 2px #000' : 'none'};
  cursor: pointer;
`;

const Home = () => {
  const { theme, changeTheme, toggleDarkMode, isDarkMode, themes } = useContext(ThemeContext);
  
  return (
    <HomeContainer>
      <Heading theme={theme}>John Doe</Heading>
      <Subheading theme={theme}>Full Stack Developer | AI Specialist</Subheading>
      
      <p>Welcome to my interactive portfolio! I'm specialized in AI agent development and building AI-enhanced applications.</p>
      
      <div>
        <h3>Try changing the theme:</h3>
        <ThemeButtons>
          {Object.keys(themes).map(themeName => (
            <ThemeButton 
              key={themeName}
              color={themes[themeName].colors.primary}
              isActive={theme.name === themeName}
              onClick={() => changeTheme(themeName)}
            />
          ))}
        </ThemeButtons>
        
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      
      <p>You can interact with the AI assistant to navigate my portfolio, customize the interface, and learn more about me.</p>
    </HomeContainer>
  );
};

export default Home;