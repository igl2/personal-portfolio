import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

let Projects = () => {
    return (
        <section className="projects-section" id="projects-section">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>Projects I've worked on</h3>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                    <div className="projects-grid">
                        <a className="card-link" href="https://online-fit-expert.web.app/" target="_blank" rel="noreferrer">
                            <div className="projects-card">
                                <h4>Online Fit Expert</h4>
                                <p className="project-description">A className group project, this web application
                                    allows
                                    users to search for
                                    shoes and view/track
                                    their workouts. Deployed using Firebase.</p>
                                <div className="technology-used">
                                    <span className="technology-used-item">HTML5</span>
                                    <span className="technology-used-item">CSS3</span>
                                    <span className="technology-used-item">JavaScript</span>
                                    <span className="technology-used-item">Angular</span>
                                    <span className="technology-used-item">Bootstrap</span>
                                    <span className="technology-used-item">Firebase</span>
                                    <span className="technology-used-item">Sneaker Database API</span>
                                </div>
                            </div>
                        </a>
                        <a className="card-link" href="https://github.com/igl2/Save-My-Jam" target="_blank" rel="noreferrer">
                            <div className="projects-card">
                                <h4>Save My Jam</h4>
                                <p className="project-description">This web application allows users to search the
                                    Spotify library,
                                    create a playlist, and save it to their personal Spotify account. Deployed using Surge.</p>
                                <div className="technology-used">
                                    <span className="technology-used-item">HTML5</span>
                                    <span className="technology-used-item">CSS3</span>
                                    <span className="technology-used-item">JavaScript</span>
                                    <span className="technology-used-item">React</span>
                                    <span className="technology-used-item">Spotify API</span>
                                </div>
                            </div>
                        </a>
                        <a className="card-link" href="https://mysterious-wave-82123.herokuapp.com/" target="_blank" rel="noreferrer">
                            <div className="projects-card">
                                <h4>ToDo List</h4>
                                <p className="project-description">A to-do list website that allow users to add and delete tasks. Uses MongoDB
                                    to save tasks into the database. Deployed using Heroku.</p>
                                <div className="technology-used">
                                    <span className="technology-used-item">HTML5</span>
                                    <span className="technology-used-item">CSS3</span>
                                    <span className="technology-used-item">JavaScript</span>
                                    <span className="technology-used-item">Heroku</span>
                                    <span className="technology-used-item">MongoDB</span>
                                </div>
                            </div>
                        </a>
                        <a className="card-link" href="https://pacific-meadow-19624.herokuapp.com/" target="_blank" rel="noreferrer">
                            <div className="projects-card">
                                <h4>Newsletter Signup</h4>
                                <p className="project-description">This web application allows users to sign up with their first name, last
                                    name, and email address. Their sign up info will be transmitted to Mailchimp using the the Mailchimp
                                    API. Deployed using Heroku.</p>
                                <div className="technology-used">
                                    <span className="technology-used-item">HTML5</span>
                                    <span className="technology-used-item">CSS3</span>
                                    <span className="technology-used-item">JavaScript</span>
                                    <span className="technology-used-item">Heroku</span>
                                    <span className="technology-used-item">Mailchimp API</span>
                                </div>
                            </div>
                        </a>
                        <a className="card-link" href="https://igl2.github.io/v2/" target="_blank" rel="noreferrer">
                            <div className="projects-card">
                                <h4>Personal Website v2</h4>
                                <p className="project-description">This is the second iteration of my personal website. Deployed using Github
                                    Pages.
                                </p>
                                <div className="technology-used">
                                    <span className="technology-used-item">HTML5</span>
                                    <span className="technology-used-item">CSS3</span>
                                    <span className="technology-used-item">JavaScript</span>
                                    <span className="technology-used-item">Bootstrap</span>
                                    <span className="technology-used-item">jQuery</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default Projects;