import React from "react";

let currentYear = new Date().getFullYear();

let Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className="footer-container">
                    <div className="social-icon-wrapper">
                        <a className="footer-link" href="https://www.linkedin.com/in/isaiahlleva/" target="_blank"
                             aria-label="linkedin-logo" rel="noreferrer"><i className="fa-brands fa-linkedin social-icon"></i></a>
                        <a className="footer-link" href="https://github.com/igl2" target="_blank" aria-label="linkedin-logo" rel="noreferrer"><i
                            className="fa-brands fa-github social-icon"></i></a>
                        <a className="footer-link" href="https://www.instagram.com/isaiah_lleva/" target="_blank"
                            aria-label="linkedin-logo" rel="noreferrer"><i className="fa-brands fa-instagram social-icon"></i></a>
                    </div>
                    <p className="copyright">&copy; Isaiah Lleva <span id="year">{currentYear}</span></p>
            </div>
        </section>
  </footer>
    )
}

export default Footer;