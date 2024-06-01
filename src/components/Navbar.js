import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  background: ${({ theme }) => theme.textColor}; /* Changed background color to opposite */
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
`;

const MenuItem = styled.li`
  margin: 0 10px;
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

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Brand>Ayush Dey</Brand>
        <Menu>
          <MenuItem>
            <MenuLink href="#home">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#about">About Me</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#projects">Projects</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#connect-me">Connect</MenuLink>
          </MenuItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
