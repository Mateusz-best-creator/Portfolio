import React from 'react';
import "./project-scrolling.styles.css";

function ProjectScrolling({ title, description, technologies }) {
    return (
        <div className="media-element">
            <a target="_blank" className='project-link' href="https://github.com/Mateusz-best-creator?tab=repositories" alt="link">
                <h3 className="project-scrolling-title">{title}</h3>
            </a>
            <p>{description}</p>
            <div className="icons-container">
                {technologies.map((tech, index) => (
                    <img key={index} src={tech} alt={`technology-${index}`} className="tech-icon" />
                ))}
            </div>
        </div >
    );
}

export default ProjectScrolling;
