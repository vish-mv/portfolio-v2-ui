// src/pages/Contact.jsx
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../themes/ThemeContext';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text};
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary}e6;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary}30;
  color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 0.3rem;
`;

const InfoText = styled.p`
  color: ${props => props.theme.colors.text};
`;

const DownloadButton = styled.a`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary}e6;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { theme } = useContext(ThemeContext);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! This is a demo, so no message was actually sent.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <ContactContainer>
      <Heading theme={theme}>Contact Me</Heading>
      
      <ContactGrid>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label theme={theme}>Name</Label>
            <Input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              theme={theme}
            />
          </FormGroup>
          
          <FormGroup>
            <Label theme={theme}>Email</Label>
            <Input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              theme={theme}
            />
          </FormGroup>
          
          <FormGroup>
            <Label theme={theme}>Subject</Label>
            <Input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              theme={theme}
            />
          </FormGroup>
          
          <FormGroup>
            <Label theme={theme}>Message</Label>
            <Textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              theme={theme}
            />
          </FormGroup>
          
          <SubmitButton type="submit" theme={theme}>
            Send Message
          </SubmitButton>
        </ContactForm>
        
        <ContactInfo>
          <InfoItem>
            <IconWrapper theme={theme}>📧</IconWrapper>
            <InfoContent>
              <InfoTitle theme={theme}>Email</InfoTitle>
              <InfoText theme={theme}>visal.m.vitharana@gmail.com</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <IconWrapper theme={theme}>📱</IconWrapper>
            <InfoContent>
              <InfoTitle theme={theme}>Phone</InfoTitle>
              <InfoText theme={theme}>+1 (555) 123-4567</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <IconWrapper theme={theme}>📍</IconWrapper>
            <InfoContent>
              <InfoTitle theme={theme}>Location</InfoTitle>
              <InfoText theme={theme}>San Francisco, CA</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <IconWrapper theme={theme}>💼</IconWrapper>
            <InfoContent>
              <InfoTitle theme={theme}>Resume</InfoTitle>
              <InfoText theme={theme}>
                Download my resume for more details about my experience and skills.
              </InfoText>
              <DownloadButton href="#" download theme={theme}>
                Download CV 📄
              </DownloadButton>
            </InfoContent>
          </InfoItem>
        </ContactInfo>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;