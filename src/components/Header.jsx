import { FaArrowRight } from "react-icons/fa";
import { HeroAbout } from "./HeroAbout";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <Element
        name="Hero-section"
        className="hero-section vh-100 d-flex  align-items-center  justify-content-center text-center  mt-5"
      >
        <div className="container ">
          <div className="row align-items-center ">
            {/* Left Content Section */}
            <div className="col-12 col-md-6 order-2 order-md-2 order-sm-2 text-white">
              <h1 className="display-3 fw-bold">Cherkupally Venkata Ramana</h1>
              <h3 className="fw-light">Full-Stack Developer</h3>
              <p className="lead mt-3 mb-4">
                Passionate about creating interactive, responsive, and visually
                appealing websites. Skilled in React, JavaScript, and modern web
                technologies.
              </p>
              <div className="d-flex text-center justify-content-center align-items-center">
                <Link to="contact">
                  <button className="btn btn-primary me-2 fs-5 px-4 py-2 w-auto ">
                    Hire Me
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="btn btn-outline-light fs-5 px-2 py-2 w-auto ">
                    View Projects <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="col-12 col-md-6 order-1 order-md-2 order-sm-1">
              <img
                src="public/hero.jpg"
                className="hero-img img-fluid rounded-circle border border-light shadow-lg"
                alt="Hero Profile"
              />
            </div>
          </div>
        </div>
      </Element>
      <HeroAbout />
    </header>
  );
};
