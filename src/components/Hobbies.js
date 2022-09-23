import React from "react";

let Hobbies = () => {
    return (
        <section class="hobbies-section" id="hobbies-section">
            <div class="container">
                <h3>Who I am and What I do</h3>
                <div class="hobbies-grid">
                    <div class="hobbies-card">
                        <div class="hobbies-icon"><i class="fa-solid fa-cross"></i></div>
                        <h4>Believer</h4>
                        <p>As a believer, my priority is always God. He is the source of all that is good and we are nothing without
                            Him. By putting Him first, everything else will fall into the right place at His
                            time.</p>
                    </div>
                    <div class="hobbies-card">
                        <div class="hobbies-icon"><i class="fa-solid fa-code"></i></div>
                        <h4>Web Development</h4>
                        <p>With a degree in Software Design and Development, I have learned the fundamentals of programming and
                            computer science. I've familiarized myself with various languages and technologies to get a better
                            understanding of different types of software. I am always eager to learn more.</p>
                    </div>
                    <div class="hobbies-card">
                        <div class="hobbies-icon"><i class="fa-solid fa-dumbbell"></i></div>
                        <h4>Exercise and Sports</h4>
                        <p>I try my best not to live a sedentary lifestyle. Therefore, I'll do what it takes to get my body moving
                            by going to the gym or going for a run.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hobbies;