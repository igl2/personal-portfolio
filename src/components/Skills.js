import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';


let Skills = () => {
    return (
        <section class="skills-section" id="skills-section">
            <div class="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>Some technologies I've used:</h3>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                    <div class="skill-logos-container">
                        <i class="skill-logo fa fa-html5"></i>
                        <i class="skill-logo fa fa-css3"></i>
                        <i class="skill-logo fab fa-js"></i>
                        <i class="skill-logo fab fa-bootstrap"></i>
                        <i class="skill-logo fab fa-angular"></i>
                        <i class="skill-logo fab fa-react"></i>
                        <i class="skill-logo fab fa-node"></i>
                        <i class="skill-logo fab fa-java"></i>
                        <i class="skill-logo fab fa-git-alt"></i>
                        <i class="skill-logo fa-brands fa-figma"></i>
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default Skills;