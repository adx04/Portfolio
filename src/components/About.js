import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section className="about-me" id="about">
      <div className="container">
        <div className="about-content">
          <div className="left-content">
            <h1 className="about-heading">About Me</h1>
&nbsp;

            <center>
              <img src=" /image.jpg" alt="Ayush Dey"/>
            </center>
           
            <p>
              
              "As a coding enthusiast with a passion for solving complex problems,<br></br> I love nothing more than diving into new projects and finding creative solutions. <br></br>I'm always eager to learn and grow as a developer as well as dedicated to staying current with the latest developments in AI/ML and other related CS domains. I am always eager to apply my skills to real-world problems. When I'm not coding, you can find me <br></br>tinkering with projects or participating in hackathons and coding competitions. <br></br>Let's connect and see what we can build together!"

            </p>
&nbsp;

          </div>
&nbsp;

          <div className="right-content">
            <h1 className="skills-heading">My Skills</h1>
&nbsp;

          <ul className="skills-list">
  <li>React JS</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Angular.js</li>
  <li>MongoDB</li>
  <li>Data Structures and Algorithms</li>
  <li>Oracle SQL</li>
  <li>MySQL</li>
  <li>Python (Libraries)</li>
  <li>Java </li>
  <li>C</li>
  <li>Agile Methodologies</li>
  <li>MS Excel</li>
</ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
