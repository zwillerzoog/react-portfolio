import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render = () => {
        return (
            <nav className="main-nav collapsed">
                <Link className="nav-link home-button active" to="/">
                    <p className='nav-description'>Home</p>
                </Link>
                <Link className="nav-link about-button" to="/about">
                    <p className='nav-description'>About Me</p>
                </Link>
                <Link className="nav-link work-button" to="/work">
                    <p className='nav-description'>My Work</p>
                </Link>
            </nav>)
    }
}


export default Nav;