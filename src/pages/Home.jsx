// src/pages/Home.jsx
import { useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeContext } from '../themes/ThemeContext';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HomeContainer = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 0;
`;

const NameHeading = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const TitleSplit = styled.div`
  display: flex;
  margin: 1.5rem 0 3rem;
  max-width: 900px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TitleBox = styled(motion.div)`
  flex: 1;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.left ? props.theme.colors.primary + '15' : props.theme.colors.secondary + '15'};
    z-index: -1;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${props => props.left ? props.theme.colors.primary : props.theme.colors.secondary};
  }
  
  p {
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const ProfileContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 3rem auto;
`;

const ProfileImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: ${props => props.theme.colors.primary}30;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: ${props => props.theme.colors.secondary}30;
    z-index: 1;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
`;

const Intro = styled(motion.p)`
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.2rem;
  line-height: 1.8;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <HomeContainer>
      <NameHeading 
        theme={theme}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Visal Vitharana
      </NameHeading>
      
      <TitleSplit>
        <TitleBox 
          left
          theme={theme}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>AI Developer</h2>
          <p>Specialized in building intelligent agents and AI-enhanced applications</p>
        </TitleBox>
        
        <TitleBox 
          theme={theme}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Software Engineer</h2>
          <p>Full stack development with Python, JavaScript and modern frameworks</p>
        </TitleBox>
      </TitleSplit>
      
      <ProfileContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ProfileImageContainer theme={theme}>
          <ProfileImage>👤</ProfileImage>
        </ProfileImageContainer>
      </ProfileContainer>
      
      <Intro theme={theme}>
        Welcome to my interactive portfolio! I'm specialized in AI agent development and building AI-enhanced applications. 
        You can interact with the AI assistant to navigate my portfolio, customize the interface, and learn more about me.
      </Intro>
    </HomeContainer>
  );
};

export default Home;