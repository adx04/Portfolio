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

const Contact = () => {
  return (
    <ContactContainer className="contact" id="connect-me">
      <div className="container">
        <ContactContent className="contact-content">
          <ContactHeading>Connect with Me</ContactHeading>
          <p>
            You can reach me via email at: <a href="mailto:ayush.dey@example.com">ayush2004dey@gmail.com</a>
          </p>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;
