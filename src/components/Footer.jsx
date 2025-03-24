import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Link as ScrollLink, Element } from "react-scroll";
export const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center ">
      <div className="container">
        <div className="row gy-2">
          {/* About Section */}
          <div className="footer-div col-lg-4 col-md-6 col-12">
            <div>
              <h3 className="fw-bold mb-1">About Cherkupally</h3>
              <p className="text-light">
                The world moves fast — people prefer a clean, visual experience
                over long paragraphs. We craft compelling, effective solutions.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-div col-lg-4 col-md-6 col-12 text-center">
            <div>
              <h3 className="fw-bold mb-1">Navigation Links</h3>
              <ul className="list-unstyled text-capitalize fs-5">
                <li>
                  <ScrollLink
                    to="Hero-section"
                    smooth={true}
                    duration={200}
                    className="nav-link"
                  >
                    <span>Home</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="About"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                  >
                    <span>About</span>
                  </ScrollLink>
                </li>
                <ScrollLink
                  to="Projects"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  <span>Projects</span>
                </ScrollLink>

                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                  >
                    <span>Contact</span>
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-div col-lg-4 col-md-12 col-12">
            <Element name="social">
              <h4 className="text-uppercase ">Follow Us</h4>
            </Element>
            <div className="icons fs-1">
              <span>
                <a
                  href="https://github.com/Ramana16-cherkupally?tab=repositories"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/venkat154236/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span>
                <a href="https://x.com/home" target="_blank">
                  <FiTwitter />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-1">
          <p className="small text-light">
            © {new Date().getFullYear()} All rights reserved | Built with ❤️ by
            Venkatcherkupally
          </p>
        </div>
      </div>
    </footer>
  );
};
