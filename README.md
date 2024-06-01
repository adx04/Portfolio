
# My Portfolio 


## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Technologies Used](#technologies-used)
7. [Key Learnings](#key-learnings)



## Features

- **Responsive Design**: Ensures optimal viewing experience across a wide range of devices, from desktops to mobile phones.
- **Dark/Light Mode Toggle**: Allows users to switch between dark and light themes for improved readability and aesthetics.
- **Navbar**: Provides easy navigation to different sections of the website, enhancing user experience.
- **Home**: Introduces visitors to my profile, including my role as a coding enthusiast and relevant background information.
- **About**: Offers detailed information about me, including my skills, interests, and educational background.
- **Projects**: Showcases a selection of my projects, providing brief descriptions and links for further exploration.
- **Contact**: Offers multiple ways for visitors to get in touch with me, including email and social media links.

## Installation

To install and run the project locally, follow these steps:

```bash
git clone <repository-url>
cd my-portfolio
npm install
npm start
```

## Usage

Once the project is set up, open your web browser and navigate to `http://localhost:3000` to view the website.

## Folder Structure

The project follows a standard folder structure for a React application:

```plaintext
src/
|-- components/
|   |-- Navbar.js
|   |-- Home.js
|   |-- About.js
|   |-- Projects.js
|   |-- Contact.js
|   |-- ToggleThemeButton.js
|-- redux/
|   |-- store.js
|   |-- themeSlice.js
|-- styles/
|   |-- GlobalStyles.js
|-- App.js
|-- index.js
|-- ...
```

## JS Frameworks Used

The main technologies and libraries/frameworks used in this project include:

- React.js: For building the user interface components and managing the application's state.
- Redux: For global state management, particularly for handling the dark/light mode toggle functionality.
- Styled Components: For styling the components using CSS-in-JS, providing a flexible and maintainable approach to styling.

## Key Learnings

- **Toggle Effect**: Implementing the dark/light mode toggle functionality using Redux allowed me to learn about managing global state and handling user preferences across different components.
- **Redux**: Integrating Redux into the project provided valuable insights into state management in large-scale applications, enabling efficient data flow and separation of concerns.
- **Component-based Architecture**: Building the website with React.js reinforced the concept of component-based architecture, facilitating modular development and code reuse.


