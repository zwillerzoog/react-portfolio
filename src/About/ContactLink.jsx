import React from 'react';
import email from '../assets/icons8-Email.png';
import linkedin from '../assets/icons8-LinkedIn.png';
import github from '../assets/icons8-GitHub.png'
import './About.css'


const ContactLink = (props) => (
        // <nav className="contact">
        //   <div className="contact-links">
        //     <div className="contact-link contact-link-email">
              <a className="contact-link" href={props.link} rel="noopener noreferrer" target="_blank">
                <img className="contact-icon" src={props.image} alt={props.imageAlt} />
                <div className="contact-description">{props.description}</div>
              </a>
        //     </div>
        //     </div>
        // </nav>
)

export default ContactLink;