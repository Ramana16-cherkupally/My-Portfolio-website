import { FaUser } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { FaEnvelopeSquare } from "react-icons/fa";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
export const HeroAbout = () => {
  return (
    <main className="container mt-4 ">
      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center ">
        {/* About Section */}
        <div className="col">
          <div className="card text-center shadow-lg border-0 h-100 bg-light">
            <div className="card-body">
              <span className="icons text-primary display-5">
                <FaUser />
              </span>
              <Element name="About">
                <h4 className="mt-3 fw-bold">About</h4>
              </Element>
              <p className="description text-secondary">
                I’m eager to collaborate with dynamic teams, contribute to
                innovative projects, and continuously learn to stay at the
                cutting edge of web technologies. Whether it's crafting a sleek,
                responsive layout or diving into backend functionality, I aim to
                deliver high-performance digital solutions
              </p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <Link to="about">
                <button className="btn btn-primary  fs-5 px-2 py-2 w-auto shadow-sm">
                  About Me
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="col">
          <div className="card text-center shadow-lg border-0 h-100 bg-light">
            <div className="card-body">
              <span className="icons text-danger display-4">
                <FaDiagramProject />
              </span>
              <Element name="Projects">
                <h4 className="mt-3 fw-bold">Projects</h4>
              </Element>
              <p className="description text-secondary">
                Combining frontend and backend skills has been the most
                rewarding part of my learning journey. I’ve created complete
                applications, integrating React with Node.js and SQL/Python to
                manage data while keeping everything fast, responsive, and
                user-friendly.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <Link to="projects">
                <button className="btn btn-danger  fs-5 px-2 py-2 w-auto  shadow-sm">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col">
          <div className="card text-center shadow-lg border-0 h-100 bg-light">
            <div className="card-body">
              <span className="icons text-success display-4">
                <FaEnvelopeSquare />
              </span>
              <Element name="contact">
                <h4 className="mt-3 fw-bold">Contact</h4>
              </Element>
              <p className="description text-secondary">
                I’m always eager to connect, collaborate, and create whether
                it’s discussing web development, brainstorming project ideas, or
                tackling exciting new challenges. If you’re looking for a
                dedicated web developer or just want to chat about technology
                and innovation, feel free to reach out!
              </p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <Link to="contact">
                <button className="btn btn-success  fs-5 px-4 py-2 w-auto  shadow-sm">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
