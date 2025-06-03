import React from 'react';
import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: 'Music Player App',
      description: 'A React-based music player with enhanced CSS.',
      link: 'https://music-player-02.vercel.app/'
    },
    {
      title: 'Password Generator',
      description: 'A JavaScript app to generate secure passwords.',
      link: 'https://password-generator-sepia-zeta.vercel.app/'
    },
    {
        title: 'Pawfetch(Full-Stack App)',
        description: 'A Full Stack project using React and Javascript for the frontend, while using django/Django REST for the backend.',
        link: 'https://doglist.vercel.app/'
    },
    {
        title: 'To Do List',
        description: 'A to do list project made using ',
        link: 'https://to-do-list-mauve-gamma-70.vercel.app/'
    },
    {
        title: '5 Day Forecast App',
        description: 'A 5 day weather forecast of any city in the united states over the next 5 days. It was made using React and javascript.',
        link: 'https://5-d-forecaster-app.vercel.app/'
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;