import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const techStack = [
  {
    name: "React",
    color: "#61DBFB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    color: "#68A063",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    color: "#E34F26",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    color: "#1572B6",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Python",
    color: "#306998",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Bootstrap",
    color: "#7952B3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "MySQL",
    color: "#4479A1",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Redux",
    color: "#764ABC",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
];

export const TechStackSection = () => {
  return (
    <main className="text-start py-2">
      <h5
        className="d-inline-flex fw-bold mb-1"
        style={{
          padding: "1px 10px",
          background: "linear-gradient(90deg, #6A11CB, #2575FC)",
          borderRadius: "3rem",
        }}
      >
        Tech Stock I Love :
      </h5>
      <section className="container rounded shadow-sm bg-light  animate__animated animate__fadeInUp shadow-lg py-3">
        <div className=" row text-dark justify-content-center  rounded">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center"
            >
              <div className="tech-icon bg-dark rounded-circle shadow bg-light">
                <img src={tech.logo} alt={tech.name} className="img-fluid" />
              </div>
              <h5 className="mt-1">{tech.name}</h5>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
