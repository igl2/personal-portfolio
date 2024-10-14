import React from "react";
import profilePhoto from "../assets/images/profile-img.png";
// import file from '../static/Isaiah_Lleva_Resume.pdf';
import { AnimationOnScroll } from "react-animation-on-scroll";

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
              I'm a graduate of the{" "}
              <a
                className="hover-underline-animation"
                href="https://uwf.edu/"
                target="_blank"
                rel="noreferrer"
              >
                University of West Florida
              </a>{" "}
              with a background in{" "}
              <a
                className="hover-underline-animation"
                href="https://uwf.edu/programs/hmcse/software-design-development-bs/"
                target="_blank"
                rel="noreferrer"
              >
                Software Design and Development
              </a>{" "}
              and a minor in{" "}
              <a
                className="hover-underline-animation"
                href="https://uwf.edu/hmcse/departments/computer-science/"
                target="_blank"
                rel="noreferrer"
              >
                Computer Science
              </a>
              . The main goals in my career is to continue to develop my
              leadership, techinical, and soft skills. I believe all of these go
              hand in hand in becoming a successful leader and worker. One of my
              favorite verses from the scriptures not only pertains to my
              service to God, but also to the job He's called me to do.
            </p>
            <p>
              <i>
                "And whatever you do, do it heartily, as to the Lord and not to
                men, knowing that from the Lord you will receive the reward of
                the inheritance; for you reserve the Lord Christ"
                <br></br>
                <br></br>
                Colossians 3:23-24
              </i>
            </p>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
