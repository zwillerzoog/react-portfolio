import React from 'react';
import './work.css';

const ProjectSection = (props) => (
    <section className="project savage-ghosting">
        <h3>{props.name}</h3>
        <div className="project-wrapper">
            <img className="project-image" src={props.image} alt={props.imageAlt} />
            <div style={{ flex: 2 }}>
                <p className="project-description">{props.description}</p>
                <div className="project-stack">
                    {props.techStack.map(techType => (
                        <div className="project-stack-item">{techType}</div>
                    ))}
                </div>
                <nav className="project-buttons">
                    <button className="project-button project-link-live">
                        <a href={props.liveLink} rel="noopener noreferrer" target="_blank">Live demo</a>
                    </button>
                    <button className="project-button project-link-github">
                        <a href={props.gitLink} rel="noopener noreferrer" target="_blank">Source code</a>
                    </button>
                </nav>


            </div>
        </div>
    </section>


)

export default ProjectSection;