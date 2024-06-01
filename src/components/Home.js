import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  transition: background 0.5s ease;
`;

const NameSection = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.textColor};
`;

const Home = () => {
  return (
    <HomeContainer id="home-page">
      <NameSection>
        <h1>Coding Enthusiast</h1>
&nbsp;
        <p>Campus Ambassador @Coding Ninjas</p>
        <p>B.Tech (Hons.) (CSE) with Spl. in Fullstack AI</p>
        <p>University of Petroleum & Energy Studies (UPES), Dehradun</p>
        <p>Burdwan, West Bengal, India</p>
      </NameSection>
    </HomeContainer>
  );
};

export default Home;
