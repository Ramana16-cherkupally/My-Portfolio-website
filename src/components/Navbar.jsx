import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);

  const handleHambutton = () => {
    setShowmenu(!showmenu);
  };

  return (
    <section>
      <header className="shadow-lg bg-dark fixed-top ">
        <section className="container d-flex flex-wrap align-items-center justify-content-around shadow-lg text-white py-2">
          <nav className={showmenu ? "menu-items" : "menu-web"}>
            <ul className="bg-dark">
              <li>
                <ScrollLink
                  to="Hero-section"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <span>Home</span>
                  </Link>
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="About"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  <Link to="about" style={{ textDecoration: "none" }}>
                    <span>About</span>
                  </Link>
                </ScrollLink>
              </li>

              <ScrollLink
                to="Projects"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <Link to="projects" style={{ textDecoration: "none" }}>
                  <span>Projects</span>
                </Link>
              </ScrollLink>
              <li>
                <ScrollLink
                  to="social"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  <Link to="" style={{ textDecoration: "none" }}>
                    <span>Social</span>
                  </Link>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  <Link to="contact" style={{ textDecoration: "none" }}>
                    <span>Contact</span>
                  </Link>
                </ScrollLink>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1KsrJhMHApTEOsq-ctpU5CqjllJ6MPUIs/view?usp=drive_link"
                  style={{ textDecoration: "none" }}
                >
                  resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="ham-menu shadow-lg text-white w-100">
            <div>
              <span className="fs-2 text-capitalize">Venkata ramana</span>
            </div>
            <button
              className="bg-transparent hamberger"
              onClick={handleHambutton}
              size={28}
              style={{
                color: "#ff9800",
                width: "40px",

                transform: showmenu ? "rotate(90deg)" : "rotate(0)",
                transition: "0.3s ease",
              }}
            >
              <GiHamburgerMenu
                style={{
                  height: "35px",
                  width: "35px",
                  borderRadius: "10px",
                }}
              />
            </button>
          </div>
        </section>
      </header>
    </section>
  );
};
