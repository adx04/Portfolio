import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import store from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ToggleThemeButton from './components/ToggleThemeButton'; // Import ToggleThemeButton
import { useSelector } from 'react-redux'; // Import useSelector
import { theme } from './theme'; // Import the theme object

// Global styles to handle theme changes
const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    transition: background 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.linkColor};
  }
`;

const AppWrapper = ({ children }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const lightTheme = {
    background: '#f0f0e6',
    textColor: '#07374a',
    linkColor: '#25b79f',
  };

  const darkTheme = {
    background: '#2c2c2c',
    textColor: '#f0f0e6',
    linkColor: '#25b79f',
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Navbar />
        <ToggleThemeButton /> {/* Add ToggleThemeButton here */}
        <Home />
        <About />
        <Projects />
        <Contact />
      </AppWrapper>
    </Provider>
  );
};

export default App;
