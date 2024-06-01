import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleTheme } from '../redux/themeSlice';

// Styled component for the button
const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const ToggleThemeButton = () => {
  // Get the current theme mode from the Redux store
  const darkMode = useSelector((state) => state.theme.darkMode);
  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    // Button that toggles the theme when clicked
    <Button onClick={() => dispatch(toggleTheme())}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};

export default ToggleThemeButton;
