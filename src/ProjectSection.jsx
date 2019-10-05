import React from 'react';
import './work.css';
import savage from './assets/savage_screenshot.png'

const ProjectSection = (props) => (
        <section class="project savage-ghosting">
            <h3>{props.name}</h3>
            <img class="project-image" src={props.image} alt={props.imageAlt} />
            <p class="project-description">{props.description}</p>
            <nav class="project-buttons">
                <button class="project-button project-link-live">
                    <a href={props.liveLink} rel="noopener noreferrer" target="_blank">Live demo</a>
                </button>
                <button class="project-button project-link-github">
                    <a href={props.gitLink} rel="noopener noreferrer" target="_blank">Source code</a>
                </button>
            </nav>
            <div class="project-stack">
                {props.techStack.map(techType => (
                <p class="project-stack-item">{techType}</p>
                ))}
            </div>
        </section>

        
    )

export default ProjectSection;