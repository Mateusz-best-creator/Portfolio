import React from 'react';
import './project-card.styles.css';

import C from "../../assets/c++.png"
import SDL from "../../assets/SDL.png"

const ProjectCard = ({ imageUrl, title, description, iconsUrls }) => {
    return (
        <div className="project-card">
            <div className='icons-description'>
                <div className='description'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className='icons-container'>
                    <img src={C} alt="project" />
                    <img src={SDL} alt="project" />
                </div>
            </div>
            <div className='image'>
                <img src={imageUrl} />
            </div>

        </div>
    );
};

export default ProjectCard;
