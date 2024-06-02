import React from 'react';
import '../App.css';

const Projects = () => {
  const sectionStyle = {
    backgroundImage: 'url("https://w0.peakpx.com/wallpaper/310/809/HD-wallpaper-black-background-black-banner-black-design-black-web-headers.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <section id="projects" className="portfolio" style={sectionStyle}>
      <div className="proj-heading">
        <h1>Projects</h1>
      </div>
      <div className="portfolio-content container">
        <div className="flashcards">
          <div className="flashcard">
            <img src="https://www.webfx.com/wp-content/uploads/2021/10/invoice-generator-03invoicetome.jpg" alt="Invoice Generation Webapp" />
            <h2>Invoice Generating Webapp using React</h2>
            <p>
              Created a Web application using React. This application serves as a landing page for showcasing the Frontend (responsive) of a specific product or service. Also incorporated the functionality to generate invoices directly using the 'react-pdf' library.
            </p>
          </div>

          <div className="flashcard">
            <img src="https://www.askpython.com/wp-content/uploads/2021/06/image-1.png" alt="Interactive Text Game" />
            <h2>Interactive choice-based text game using Python</h2>
            <p>
              "Echoes of the Abyss" is a text-based adventure game that I'm developing in Python. The game is set in a mysterious cave and focuses on creating an immersive experience for players. It includes player navigation, item interaction, and puzzle-solving.
            </p>
          </div>

          <div className="flashcard">
            <img src="https://www.researchgate.net/publication/352701770/figure/fig4/AS:1080238821912617@1634560413675/Advantages-of-Blockchain-Technology-in-Food-Supply-Chain.jpg" alt="Blockchain Thesis" />
            <h2>A Thesis on 'Integration of Blockchain Technology in Agro-food Supply Chain Management'</h2>
            <p>
              I studied and examined integrating blockchain technology into agro-food supply chain management to enhance traceability, transparency, and security. With further delving deep into blockchain's potential to streamline operations, reduce fraud, and ensure food safety, providing case studies and a framework for implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
