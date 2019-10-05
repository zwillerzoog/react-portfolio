import React from 'react';
import './work.css';
import savage from './assets/savage_screenshot.png'
import ProjectSection from './ProjectSection'

const Work = () => (
    <section id="work" class="white-container">
        {/* <div class="tabs">
            <button class="tab savage">Savage Ghosting</button>
            <button class="tab rex">My Rex</button>
            <button class="tab feedback">Feedback Framework</button>
        </div> */}
    <ProjectSection 
        name={"Savage Ghosting"}
        image={savage}
        imageAlt={"Screenshot of Savage Ghosting Menu Screen"}
        description={"A multiplayer top-down shooter built with Phaser.io."}
        liveLink={"https://savage-ghosting.herokuapp.com/"}
        gitLink={"https://github.com/zwillerzoog/boat-phaser-game"}
        techStack={['Phaser.io', 'Socket.io', 'Javascript', 'Node.js']}
    />
        <ProjectSection 
        name={"My Rex"}
        image={savage}
        imageAlt={"Screenshot of Authentication Page"}
        description={"A recommendation engine to uncover your newest obsession."}
        liveLink={"https://myrex.herokuapp.com/"}
        gitLink={"https://github.com/zwillerzoog/my-rex"}
        techStack={['Javascript', 'jQuery', 'Node.js', 'MongoDB', 'Passport.js', 'Mocha', 'Chai']}
    />
     <ProjectSection 
        name={"Feedback Framework"}
        image={savage}
        imageAlt={"Feedback Framework screenshot"}
        description={"An anonymous comment board to foster honest communication."}
        liveLink={"https://capstone-aug10.herokuapp.com/"}
        gitLink={"https://github.com/zwillerzoog/Fullstack-Capstone"}
        techStack={['React', 'Redux', 'Node.js', 'Thunk', 'Stellar.js']}
    />
    </section>
    )

export default Work;