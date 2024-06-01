
import React from 'react';
import '../App.css';


const Projects = () => {
  return (
    <section id="projects" className="portfolio">
      <div className="proj-heading">
        <h1>Projects</h1>
      </div>
      <center>
      <div className="portfolio-content container">
        <div className="project-item">
          <h2>Invoice Generating Webapp using React</h2>
          <div className="project-images">
            {/* images*/}
          </div>
          <p>
            Created a Web application using React justify. This application serves as a landing page for showcasing the Frontend (responsive) of a specific product or service. Also incorporated the functionality to generate invoices directly using the 'react-pdf' library.
          </p>
        </div>
        &nbsp;
        <div className="project-item">
        &nbsp;
          <h2>Interactive choice-based text game using Python</h2>
          <div className="project-images">
            {/* images*/}
            </div>
          <p>
            "Echoes of the Abyss" is a text-based adventure game that I'm developing in Python. The game is set in a mysterious cave and focuses on creating an immersive experience for players. It includes player navigation, item interaction, and puzzle-solving.
          </p>
        </div>
        &nbsp;
        <div className="project-item">
        &nbsp;
          <h2>A Thesis on 'Integration of Blockchain Technology in Agro-food Supply Chain Management'</h2>
          <div className="project-images">
            {/* images*/}
            </div>
          <p>
            Your description for the thesis project here.
          </p>
        </div>
      </div>
      </center>
    </section>
  );
};

export default Projects;
