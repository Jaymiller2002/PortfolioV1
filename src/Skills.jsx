import React from 'react';
import "./Skills.css";

function Skills() {
  const skillsList = [
    'React', 'Django', 'JavaScript', 'CSS', 'HTML', 'SQL'
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;