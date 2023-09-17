import React from "react";
import profilePhoto from '../assets/images/profile-img.png';
// import file from '../static/Isaiah_Lleva_Resume.pdf';
import { AnimationOnScroll } from 'react-animation-on-scroll';

let About = () => {
    return (
        <section className="about-section" id="about-section">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>About Me</h3>
                </AnimationOnScroll>
                <div className="about-grid">
                    <img src={profilePhoto} alt="profile" className="profile-photo" />
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                        <p className="about-info">
                            I'm a graduate of the <a className="hover-underline-animation" href="https://uwf.edu/"
                            target="_blank" rel="noreferrer">University of West Florida</a> with a background in <a className="hover-underline-animation"
                            href="https://uwf.edu/programs/hmcse/software-design-development-bs/" target="_blank" rel="noreferrer">Software Design and Development</a> and a minor in <a className="hover-underline-animation" href="https://uwf.edu/hmcse/departments/computer-science/"
                            target="_blank" rel="noreferrer">Computer Science</a>. I would describe myself as a well-rounded individual who not only possesses hard skills but also soft skills such as diligence, teamwork, passion, determination, and interpersonal skills.
                        </p>
                        <p className="about-info">
                            My hard skills vary having learned various technologies through courses I've taken in college and online. These technologies include, but are not limited to, Java, C++, HTML, CSS, JavaScript, SQL, Docker, Figma, and Webflow.
                        </p>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    )
}

export default About;