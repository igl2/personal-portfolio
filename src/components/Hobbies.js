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
                        <p className="hobbies-text">I love helping people. Whether it's volunteering or just helping a neighbor, I'll always take a time out of my day to help someone.</p>
                    </div> */}
                    <div className="hobbies-card">
                        <AnimationOnScroll animateIn="animate__zoomIn" delay={300} animateOnce={true}>
                            <div className="hobbies-icon"><i className="fa-solid fa-code"></i></div>
                        </AnimationOnScroll>
                        <h4>Programming</h4>
                        <p className="hobbies-text">I love learning how to create things. In a constatntly growing industry where there is always something new on the horizon, there is always something new to learn.</p>
                    </div>
                    <div className="hobbies-card">
                        <AnimationOnScroll animateIn="animate__zoomIn" delay={500} animateOnce={true}>
                            <div className="hobbies-icon"><i className="fa-solid fa-dumbbell"></i></div>
                        </AnimationOnScroll>
                        <h4>Exercise</h4>
                        <p className="hobbies-text">A healthy lifestyle is very important both physically and mentally. I do whatever it takes to get myself moving by going to the gym, running outdoors, or playing sports.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hobbies;