import React from "react";

let currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
let currentHour = new Date().getHours();

let greeting = () => {
    if (currentHour >= 1 && currentHour <= 12) {
        return 'Good Morning'
    } else if (currentHour >= 12 && currentHour <= 18) {
        return 'Good Afternoon'
    } else {
        return 'Good Evening'
    }
}
let Hero = () => {
    return (
        <section class="hero-section">
            <div class="hero-container">
                <div class="hero-text">
                    <h1 class="animate__animated animate__fadeInDown hero-title"><span id="greeting">{greeting()}</span>,<br />I'm Isaiah!</h1>
                    <h2 class="animate__animated animate__fadeInUp">Aspiring Software Engineer</h2>
                    <h2 class="animate__animated animate__fadeInUp hero-date"><span id="date">{currentDate}</span></h2>
                </div>
                <a class="down-arrow" href="#about-section" aria-label="down-arrow"><i
                    class="fa-solid fa-angle-down animate__animated animate__fadeInDown"></i></a>
            </div>
        </section>
    )
}

export default Hero;