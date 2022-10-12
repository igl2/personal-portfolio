import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

let Hobbies = () => {
    return (
        <section className="hobbies-section" id="hobbies-section">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>Who I am and What I do</h3>
                </AnimationOnScroll>
                <div className="hobbies-grid">
                    <div className="hobbies-card">
                        <AnimationOnScroll animateIn="animate__zoomIn" delay={100} animateOnce={true}>
                            <div className="hobbies-icon"><i className="fa-solid fa-handshake-angle"></i></div>
                        </AnimationOnScroll>
                        <h4>Involvement</h4>
                        <p className="hobbies-text">In addition to programming, I am also active in other areas of my life. I participate in various activities such as church involvement, clubs, volunteering, and working as a part-time waiter.</p>
                    </div>
                    <div className="hobbies-card">
                        <AnimationOnScroll animateIn="animate__zoomIn" delay={300} animateOnce={true}>
                            <div className="hobbies-icon"><i className="fa-solid fa-code"></i></div>
                        </AnimationOnScroll>
                        <h4>Software Development</h4>
                        <p className="hobbies-text">With a degree in Software Design and Development, I have learned the fundamentals of software engineering and
                            computer science. I've familiarized myself with various languages and technologies to get a better
                            understanding of different types of software. I am always eager to learn more and expand my knowledge.</p>
                    </div>
                    <div className="hobbies-card">
                        <AnimationOnScroll animateIn="animate__zoomIn" delay={500} animateOnce={true}>
                            <div className="hobbies-icon"><i className="fa-solid fa-dumbbell"></i></div>
                        </AnimationOnScroll>
                        <h4>Exercise and Sports</h4>
                        <p className="hobbies-text">I try my best not to live a sedentary lifestyle. Therefore, I'll do what it takes to get my body moving
                            by going to the gym, playing sports, or going for a run.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hobbies;