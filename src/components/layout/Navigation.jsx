// src/components/layout/Navigation.jsx
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../themes/ThemeContext';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const NavItem = styled.li`
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &.active {
    color: ${props => props.theme.colors.primary};
  }
  
  &.active::after, &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Navigation = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <StyledNavLink to="/" theme={theme}>
            Home
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/about" theme={theme}>
            About
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/skills" theme={theme}>
            Skills
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/projects" theme={theme}>
            Projects
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/contact" theme={theme}>
            Contact
          </StyledNavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;