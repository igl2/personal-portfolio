import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

let Hobbies = () => {
    return (
        <section className="hobbies-section" id="hobbies-section">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>Hobbies</h3>
                </AnimationOnScroll>
                <div className="hobbies-grid">
                    {/* <div className="hobbies-card">
                        <AnimationOnScroll animateIn="animate__zoomIn" delay={100} animateOnce={true}>
                            <div className="hobbies-icon"><i className="fa-solid fa-handshake-angle"></i></div>
                        </AnimationOnScroll>
                        <h4>Involvement</h4>
                        <p className="hobbies-text"></p>
                    </div> */}
                    <div className="hobbies-card">
                        <AnimationOnScroll animateIn="animate__zoomIn" delay={300} animateOnce={true}>
                            <div className="hobbies-icon"><i className="fa-solid fa-code"></i></div>
                        </AnimationOnScroll>
                        <h4>Development</h4>
                        <p className="hobbies-text">I always like learning new things. In a constatntly growing industry where there is always something new on the horizon, software development allows me to always keep learning something new everyday.</p>
                    </div>
                    <div className="hobbies-card">
                        <AnimationOnScroll animateIn="animate__zoomIn" delay={500} animateOnce={true}>
                            <div className="hobbies-icon"><i class="fa-solid fa-person-running"></i></div>
                        </AnimationOnScroll>
                        <h4>Sports & Exercise</h4>
                        <p className="hobbies-text">A healthy lifestyle is very important both physically and mentally. A couple things I like to do outside of work are exercise and recreational sports. A few things I love to do include crossfit, basketball, beach volleyball, and pickleball!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hobbies;