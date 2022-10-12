import React from "react";
import profilePhoto from '../assets/images/profile-img.png';
// import file from '../static/Isaiah_Lleva_Resume.pdf';
import { AnimationOnScroll } from 'react-animation-on-scroll';

let About = () => {
    return (
        <section class="about-section" id="about-section">
            <div class="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>About Me</h3>
                </AnimationOnScroll>
                <div class="about-grid">
                    <img src={profilePhoto} alt="profile" class="profile-photo" />
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                        <p class="about-info">Hello! I'm Isaiah and I graduated from the <a class="hover-underline-animation" href="https://uwf.edu/"
                            target="_blank" rel="noreferrer">University of West
                            Florida</a> with a major in <a class="hover-underline-animation"
                                href="https://uwf.edu/programs/hmcse/software-design-development-bs/" target="_blank" rel="noreferrer">Software Design and
                                Development</a> and a minor in <a class="hover-underline-animation" href="https://uwf.edu/hmcse/departments/computer-science/"
                                    target="_blank" rel="noreferrer">Computer Science</a>.
                            I'm a hard-working and team-oriented individual with a broad technical skill set. I'm always willing to learn and communicate with team members to ensure success and meet project deadlines.</p>
                        <p class="about-info">While studying to earn my degree, I worked part time in various companies to make my ends meet. With those jobs, I learned how to collaborate, communicate, and work as a team. In addition, I've always tried to keep myself active through hobbies such as exercise, running, sports, and clubs.</p>
                    </AnimationOnScroll>
                </div>
                {/* <button class="btn" href={file} target="_blank" rel="noreferrer">Resume <i
                    class="fa-solid fa-square-arrow-up-right"></i></button> */}
            </div>
        </section>
    )
}

export default About;