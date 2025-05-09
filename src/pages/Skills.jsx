// src/pages/Skills.jsx
import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../themes/ThemeContext';

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const SkillSection = styled.div`
  margin-bottom: 2.5rem;
`;

const Subheading = styled.h2`
  color: ${props => props.theme.colors.secondary};
  margin: 1.5rem 0 1rem;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const SkillName = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.div`
  height: 6px;
  background-color: ${props => props.theme.colors.border};
  border-radius: 3px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const SkillLevelFill = styled.div`
  height: 100%;
  width: ${props => props.level}%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 3px;
`;

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  
  const programmingSkills = [
    { name: 'Python', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'C++', level: 70 },
    { name: 'SQL', level: 85 }
  ];
  
  const aiSkills = [
    { name: 'Machine Learning', level: 90 },
    { name: 'Natural Language Processing', level: 92 },
    { name: 'LLM Prompt Engineering', level: 95 },
    { name: 'AI Agent Development', level: 95 },
    { name: 'Neural Networks', level: 85 },
    { name: 'Computer Vision', level: 75 }
  ];
  
  const webSkills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'RESTful APIs', level: 90 },
    { name: 'GraphQL', level: 75 }
  ];
  
  const renderSkillCards = (skills) => (
    <SkillGrid>
      {skills.map((skill, index) => (
        <SkillCard key={index} theme={theme}>
          <SkillName theme={theme}>{skill.name}</SkillName>
          <SkillLevel theme={theme}>
            <SkillLevelFill level={skill.level} theme={theme} />
          </SkillLevel>
        </SkillCard>
      ))}
    </SkillGrid>
  );
  
  return (
    <SkillsContainer>
      <Heading theme={theme}>Skills & Expertise</Heading>
      
      <SkillSection>
        <Subheading theme={theme}>AI & Machine Learning</Subheading>
        {renderSkillCards(aiSkills)}
      </SkillSection>
      
      <SkillSection>
        <Subheading theme={theme}>Programming Languages</Subheading>
        {renderSkillCards(programmingSkills)}
      </SkillSection>
      
      <SkillSection>
        <Subheading theme={theme}>Web Development</Subheading>
        {renderSkillCards(webSkills)}
      </SkillSection>
    </SkillsContainer>
  );
};

export default Skills;