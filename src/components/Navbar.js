import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  background: ${({ theme }) => theme.textColor};
  transition: background 0.3s ease;
  z-index: 1000;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 20px;
`;

const Brand = styled.h1`
  color: ${({ theme }) => theme.background};
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  transition: max-height 0.3s ease, transform 0.3s ease;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(80px)' : 'translateY(0)')}; 
    overflow: hidden;
    width: 100%;
    background: ${({ theme }) => theme.textColor}; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const MenuItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 5px 0;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.background};
  font-size: 1.2rem;
  padding: 0.3rem;
  transition: color 0.3s ease;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.background};
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.background};
  cursor: pointer;
  font-size: 2rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ToggleThemeButton = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Navbar = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Brand>Ayush Dey</Brand>
        <ToggleButton onClick={() => setIsOpen(!isOpen)}>
          ☰
        </ToggleButton>
        <Menu isOpen={isOpen}>
          <MenuItem>
            <MenuLink href="#home-page" onClick={(e) => handleScroll(e, 'home-page')}>Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#about" onClick={(e) => handleScroll(e, 'about')}>About Me</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#connect-me" onClick={(e) => handleScroll(e, 'connect-me')}>Connect</MenuLink>
          </MenuItem>
          <MenuItem>
            <ToggleThemeButton onClick={() => dispatch(toggleTheme())}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </ToggleThemeButton>
          </MenuItem>
        </Menu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
