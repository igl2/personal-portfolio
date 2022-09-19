import React from "react";

let currentYear = new Date().getFullYear();

let Footer = () => {
    return (
        <footer>
            <section class="footer">
                <div class="footer-container">
                    <div class="social-icon-wrapper">
                        <a class="footer-link" href="https://www.linkedin.com/in/isaiahlleva/" target="_blank"
                             aria-label="linkedin-logo" rel="noreferrer"><i class="fa-brands fa-linkedin social-icon"></i></a>
                        <a class="footer-link" href="https://github.com/igl2" target="_blank" aria-label="linkedin-logo" rel="noreferrer"><i
                            class="fa-brands fa-github social-icon"></i></a>
                        <a class="footer-link" href="https://www.instagram.com/isaiah_lleva/" target="_blank"
                            aria-label="linkedin-logo" rel="noreferrer"><i class="fa-brands fa-instagram social-icon"></i></a>
                    </div>
                    <p class="copyright">&copy; Isaiah Lleva <span id="year">{currentYear}</span></p>
            </div>
        </section>
  </footer>
    )
}

export default Footer;