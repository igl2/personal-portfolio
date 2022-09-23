import React, {useState, useEffect} from "react";
import image from '../assets/images/beach.jpg';

let currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
let currentHour = new Date().getHours();

let morningColor =  "#ffe9a6" ;
let afternoonColor =  "#FFB37B" ;
let eveningColor = "#FF8866" ;

let Hero = () => {
    let [greetingText, setGreetingText] = useState("");
    let [greetingTextColor, setGreetingTextColor] = useState("");

    useEffect(() => {
        if (currentHour >= 1 && currentHour <= 12) {
            setGreetingText('Good Morning');
            setGreetingTextColor(morningColor);
        } else if (currentHour >= 12 && currentHour <= 18) {
            setGreetingText('Good Afternoon');
            setGreetingTextColor(afternoonColor);
        } else {
            setGreetingText('Good Evening');
            setGreetingTextColor(eveningColor);
        }
    }, []);

    return (
        <section class="hero-section">
            <div style={{ backgroundImage:`url(${image})` }} class="hero-container">
                <div class="hero-text">
                    <h1 class="animate__animated animate__fadeInDown hero-title"><span style={{color: greetingTextColor}}>{greetingText}</span>,<br />I'm Isaiah!</h1>
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