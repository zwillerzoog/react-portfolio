import React from 'react';

import ContactLink from './ContactLink';
import headshot from '../assets/headshot_pic.jpeg';
import email from '../assets/icons8-Email.png';
import linkedin from '../assets/icons8-LinkedIn.png';
import github from '../assets/icons8-GitHub.png';

import './About.css';

const About = () => (
  <div className="outer">
    <div className="about-page middle" id="about">
      <div className="inner">
        <div className="about-box inner">
          <img className="headshot" src={headshot} alt="Heidi headshot" />
          <p className="about">
            I'm a fullstack web developer based in Washington D.C. I want to make awesome websites with awesome humans! Connect with
            me below.
          </p>
          <p className="about2">
            My top three favorite things are: Dogs, Rabbits, and Ice Cream.
            In my freetime, you can find me straight chillin, playing Ark & Stardew Valley, or in the dogpark.
    </p>
          <nav className="contact">
            <div className="contact-links">
              <ContactLink
                link={"mailto:marsh.heidi.c@gmail.com"}
                image={email}
                imageAlt={"email link"}
                description={"Email Me"}
              />
              <ContactLink
                link={"https://www.linkedin.com/in/heidi-marsh-6054562a/"}
                image={linkedin}
                imageAlt={"linkedin link"}
                description={"Connect on linkedIn"} />
              <ContactLink
                link={"https://www.github.com/zwillerzoog"}
                image={github}
                imageAlt={"github link"}
                description={"See my work on Github"} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
)

export default About;