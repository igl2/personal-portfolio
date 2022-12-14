import React, {useState} from 'react';
import Logo from '../assets/images/portfolio-logo.png';

let Navbar = () => {
    let [colorChange, setColorChange] = useState(false);

    let changeNavbarColor = () => {
        if(window.scrollY >= 60) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div>
            <nav className={colorChange ? 'navbar fixed-top navbar-expand-lg colorChange' : 'navbar fixed-top navbar-expand-lg'} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#hero-section"><img className="logo" src={Logo} alt="brand" /></a>
                    <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#about-section">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#hobbies-section">Hobbies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects-section">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills-section">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact-section">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;