import React from "react";

let Contact = () => {
    return (
        <section class="contact-section" id="contact-section">
            <div class="container">
                <h3>Contact Me</h3>
                <p>Feel
                    free to message me and I'll try to get back to you as soon as I can.</p>
                <form action="https://formspree.io/f/xzbwbyyz" method="POST" class="email-form">
                    <div class="form-group">
                        <label for="name-input">Name:</label>
                        <input type="text" class="form-control" id="name-input" placeholder="Name" name="user_name" required />
                    </div>
                    <div class="form-group">
                        <label for="email-input">Email:</label>
                        <input type="email" class="form-control" id="email-input" placeholder="Email" name="user_mail" required />
                    </div>
                    <div class="form-group">
                        <label for="message-input">Message</label>
                        <textarea type="text" class="form-control" id="message-input" placeholder="Message" name="user_message"
                            rows="3" required></textarea>
                    </div>
                    <div class="email-form-btn">
                        <button class="btn email-submit-btn" type="submit">Send <i class="fa-solid fa-paper-plane"></i></button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;