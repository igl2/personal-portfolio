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
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img className="logo" src={Logo} alt="brand" /></a>
                    <button class="custom-toggler navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#about-section">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#hobbies-section">Hobbies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects-section">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills-section">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact-section">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;