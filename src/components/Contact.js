import React from 'react';
import styled from 'styled-components';
import '../App.css';

const ContactContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
`;

const ContactContent = styled.div`
  padding: 50px 20px;
`;

const ContactHeading = styled.h2`
  margin-bottom: 20px; /* Maintain the same spacing */
`;

const Footer = styled.footer`
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.background};
  text-align: center;
  padding: 20px;
`;


const Contact = () => {
  return (
    <>
    <ContactContainer className="contact" id="connect-me">
      <div className="container">
        <ContactContent className="contact-content">
          <ContactHeading>Connect with Me</ContactHeading>
          <p>
            You can reach me via email at: <a href="mailto:ayush.dey@example.com">ayush2004dey@gmail.com</a>
          </p>
          &nbsp;
          <p>
            &nbsp;
          </p>
          <p style={{ fontSize: "25px" }}>Other Socials</p>
          &nbsp;
          <p>
           <a href="https://www.linkedin.com/in/ayush-dey-36919825a/">Linkedin</a>
          </p>
          <p>
           <a href="https://www.github.com/adx04">Github</a>
          </p>
          <p>
           <a href="https://www.hackerrank.com">HackerRank</a>
          </p>
          <p>
           <a href="https://www.instagram.com/deep._.ad">Instagram</a>
          </p>
        </ContactContent>
      </div>
    </ContactContainer>
    <Footer>
        © <b>Made by Ayush Dey</b> 
    </Footer>
    </>
  );
};

export default Contact;
