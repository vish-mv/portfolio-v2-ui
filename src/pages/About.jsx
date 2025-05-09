// src/pages/About.jsx
import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../themes/ThemeContext';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const Subheading = styled.h2`
  color: ${props => props.theme.colors.secondary};
  margin: 2rem 0 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const About = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <AboutContainer>
      <Heading theme={theme}>About Me</Heading>
      
      <Paragraph>
        I'm a Full Stack Developer specializing in AI agent development and building AI-enhanced applications.
        With a passion for creating intelligent systems, I blend technical expertise with creative problem-solving
        to develop solutions that leverage the power of artificial intelligence.
      </Paragraph>
      
      <Subheading theme={theme}>Background</Subheading>
      <Paragraph>
        With several years of experience in software development, I've worked on projects spanning from web applications
        to sophisticated AI systems. My journey began with traditional web development, but I quickly became fascinated
        with the potential of AI to transform how we interact with technology.
      </Paragraph>
      
      <Subheading theme={theme}>Philosophy</Subheading>
      <Paragraph>
        I believe in creating technology that enhances human capabilities rather than replacing them. My approach 
        to AI development focuses on building tools that are intuitive, ethical, and provide genuine value to users.
        Every project I undertake is guided by a commitment to excellence, continuous learning, and user-centered design.
      </Paragraph>
      
      <Subheading theme={theme}>Outside of Coding</Subheading>
      <Paragraph>
        When I'm not coding, you might find me hiking in nature, reading about the latest advancements in AI,
        or exploring new technologies. I'm always open to connecting with like-minded professionals and discussing
        potential collaborations.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;