import { createGlobalStyle } from 'styled-components';

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

export default GlobalStyles;
