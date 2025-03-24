import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { TechStackSection } from "./TechStack";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="container" style={{ marginTop: "3.4rem" }}>
      <header className="text-center">
        <div
          className="card justify-content-center shadow bg-gradient"
          style={{
            background: "linear-gradient(135deg, #4A00E0, #8E2DE2)",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex align-items-center justify-content-between py-2">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span
                className="btn btn-primary align-items-center justify-content-start modern-active shadow fs-5  px-1 py-2 w-auto d-flex gap-1 "
                style={{
                  transition: "0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#8E2DE2")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#4A00E0")
                }
              >
                <FaArrowLeft /> Back To
                <FaHome style={{ fontSize: "24px" }} />
              </span>
            </Link>

            <span
              className="p-heading display-6 fw-bold position-absolute start-50 translate-middle-x"
              style={{ color: "#6A11CB" }}
            >
              About
            </span>
          </div>
          {/* About Me Content Card */}
          <div className="row row-cols-1  mx-1 rounded shadow-sm bg-light animate__animated animate__fadeInUp">
            <div className="py-2 text-start">
              <span className="d-block mb-2 p-4 shadow rounded">
                <p className="lead">
                  "Hi, I'm <strong>Cherkupally Venkata Ramana</strong>, an
                  aspiring web developer passionate about crafting clean,
                  responsive, and user-friendly websites. With a strong
                  foundation in
                  <span className="text-primary">
                    HTML, CSS, JavaScript, and React.js
                  </span>
                  , I’m driven to build scalable web applications that enhance
                  user experiences. I love transforming ideas into digital
                  reality!"
                </p>
              </span>

              {/* Education Section */}
              <span className="d-block mb-2 w-100">
                <h5
                  className="d-inline-flex fw-bold "
                  style={{
                    padding: "3px 10px",
                    background: "linear-gradient(90deg, #6A11CB, #2575FC)",
                    borderRadius: "3rem",
                  }}
                >
                  Education:
                </h5>
                <div className="p-4 shadow rounded">
                  <p>
                    📚 <strong>2019-2022:</strong> B.Sc. in Computer Science —
                    University Post-Graduate College, O.U
                  </p>
                  <p>
                    🎓 <strong>2022-2024:</strong> M.Sc. in Computer Science —
                    Guru Ghasidas Vishwavidyalaya
                  </p>
                  <p>
                    <strong>2024-Present:</strong> Building web projects —
                    FoodMunch, E-Commerce Site, URL Shortener
                  </p>
                </div>
              </span>

              {/* Strengths Section */}
              <span className="w-100">
                <h5
                  className="d-inline-flex fw-bold"
                  style={{
                    padding: "1px 10px",
                    background: "linear-gradient(90deg, #6A11CB, #2575FC)",
                    borderRadius: "3rem",
                  }}
                >
                  Strengths:
                </h5>
                <div className="p-4 shadow rounded">
                  <p>
                    <strong>💻 Clean and efficient code:</strong> Writing
                    scalable and maintainable code.
                  </p>
                  <p>
                    <strong>📱 Responsive design expertise:</strong> Ensuring
                    seamless performance on all devices.
                  </p>
                  <p>
                    <strong>🤝 Team player:</strong> Enjoys collaborating with
                    developers, designers, and other stakeholders.
                  </p>
                  <p>
                    <strong>🔥 Adaptability:</strong> Always learning and
                    staying updated with the latest tech trends.
                  </p>
                </div>
              </span>
              <span className="w-100">
                <h5
                  className="d-inline-flex fw-bold"
                  style={{
                    padding: "1px 10px",
                    background: "linear-gradient(90deg, #6A11CB, #2575FC)",
                    borderRadius: "3rem",
                  }}
                >
                  Skills Snapshort:
                </h5>
                <div className="p-4 shadow rounded">
                  <div className="names">
                    <h4>HTML</h4>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                        style={{ width: "100%" }}
                      >
                        100%
                      </div>
                    </div>
                  </div>

                  <div className="names my-2">
                    <h4>CSS</h4>
                    <div className="progress">
                      <div
                        className="  progress-bar progress-bar-striped progress-bar-animated bg-success"
                        style={{ width: "90%" }}
                      >
                        90%
                      </div>
                    </div>
                  </div>

                  <div className="names my-2">
                    <h4>JAVASCRIPT</h4>
                    <div className="progress ">
                      <div
                        className="  progress-bar progress-bar-striped progress-bar-animated bg-warning"
                        style={{ width: "75%" }}
                      >
                        80%
                      </div>
                    </div>
                  </div>

                  <div className="names my-2">
                    <h4>REACTJS</h4>
                    <div className="progress ">
                      <div
                        className="  progress-bar progress-bar-striped progress-bar-animated bg-primary"
                        style={{ width: "80%" }}
                      >
                        75%
                      </div>
                    </div>
                  </div>

                  <div className="names my-2">
                    <h4>NODEJS</h4>
                    <div className="progress ">
                      <div
                        className="  progress-bar progress-bar-striped progress-bar-animated bg-danger"
                        style={{ width: "65%" }}
                      >
                        80%
                      </div>
                    </div>
                  </div>
                </div>
              </span>

              {/* Fun Facts Section */}
              <span>
                <h5
                  className="d-inline-flex fw-bold"
                  style={{
                    padding: "1px 10px",
                    background: "linear-gradient(90deg, #6A11CB, #2575FC)",
                    borderRadius: "3rem",
                  }}
                >
                  Fun Facts:
                </h5>
                <div className="p-4 shadow rounded ">
                  <p>
                    🚀 <strong>Favorite Tech Stack:</strong> React + Node.js
                  </p>
                  <p>
                    📘 <strong>Hobbies:</strong> Coding, tech blogs, exploring
                    new frameworks, problem-solving challenges
                  </p>
                  <p>
                    ✨ <strong>Motto:</strong> "Build with passion, code with
                    purpose!"
                  </p>
                </div>
              </span>

              {/* Tech Stack Section */}
              <TechStackSection />

              {/* GitHub Button */}

              <div className="d-flex justify-content-end">
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  <button
                    className="btn btn-primary my-2 modern-active shadow fs-5 px-2 py-2 d-flex align-items-center gap-2 w-auto"
                    style={{ transition: "0.3s ease-in-out" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#8E2DE2")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#4A00E0")
                    }
                  >
                    View Projects
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};
