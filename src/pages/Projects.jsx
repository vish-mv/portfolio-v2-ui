// src/pages/Projects.jsx
import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../themes/ThemeContext';

const ProjectsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.div`
  height: 180px;
  background-color: ${props => props.theme.colors.secondary}40;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background-color: ${props => props.theme.colors.primary}30;
  color: ${props => props.theme.colors.primary};
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Button = styled.a`
  background-color: ${props => props.primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.primary ? 'white' : props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? props.theme.colors.primary + 'e6' : props.theme.colors.primary + '20'};
  }
`;

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  
  const projects = [
    {
      id: 1,
      title: 'AI Research Assistant',
      description: 'An intelligent agent that helps researchers find, analyze, and summarize academic papers.',
      image: '📚',
      tags: ['Python', 'NLP', 'React', 'LangChain'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 2,
      title: 'Smart Document Analyzer',
      description: 'Tool that extracts insights from business documents using advanced NLP techniques.',
      image: '📄',
      tags: ['Python', 'TensorFlow', 'OCR', 'Next.js'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 3,
      title: 'Conversation AI Platform',
      description: 'Framework for building and deploying conversational agents with custom knowledge.',
      image: '💬',
      tags: ['Python', 'React', 'FastAPI', 'Vector Databases'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 4,
      title: 'Intelligent Task Manager',
      description: 'Project management tool with AI capabilities to prioritize and suggest tasks.',
      image: '✅',
      tags: ['JavaScript', 'Node.js', 'MongoDB', 'ML'],
      liveUrl: '#',
      repoUrl: '#'
    }
  ];
  
  return (
    <ProjectsContainer>
      <Heading theme={theme}>Projects</Heading>
      
      <ProjectGrid>
        {projects.map(project => (
          <ProjectCard key={project.id} theme={theme}>
            <ProjectImage theme={theme}>
              {project.image}
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
              <ProjectDescription theme={theme}>
                {project.description}
              </ProjectDescription>
              
              <TagsContainer>
                {project.tags.map((tag, index) => (
                  <Tag key={index} theme={theme}>{tag}</Tag>
                ))}
              </TagsContainer>
              
              <ButtonContainer>
                <Button href={project.liveUrl} primary={true} theme={theme}>
                  Live Demo
                </Button>
                <Button href={project.repoUrl} theme={theme}>
                  Source Code
                </Button>
              </ButtonContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;