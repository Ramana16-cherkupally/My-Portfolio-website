import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiSolidCaretRightCircle } from "react-icons/bi";
export const Projects = () => {
  const ProjectsData = [
    {
      project: "FoodMunch - Restaurant Management System",
      about:
        "Built a dynamic, responsive Restaurant Management System to streamline restaurant operations and enhance user interactions — delivering an intuitive, visually engaging experience for both customers and management.",
      technologies_used: {
        frontend: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)"],
        state_management: "Redux",
        backend: ["Node.js", "Express.js"],
        features: [
          "React Hooks",
          "Custom Templates",
          "Flexible Layouts",
          "Responsive Design",
        ],
      },
      img: "FoodMunch.png",
      Github: "https://github.com/Ramana16-cherkupally/FoodMunch-react-Project",
      DeployedLink: "https://food-munch-react-project-iqx7.vercel.app/",
    },

    // {
    //   project: "E-Commerce Website Development",
    //   about:
    //     "Designed and developed a fully responsive, user-friendly e-commerce website to deliver an engaging shopping experience — focusing on intuitive navigation, interactivity, and a smooth checkout process.",
    //   technologies_used: {
    //     frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    //     features: [
    //       "Product search filters",
    //       "Sorting & category-based navigation",
    //       "Client-side form validation",
    //       "Error handling",
    //       "Local storage for cart preservation",
    //       "Responsive navbar and footer",
    //     ],
    //   },
    //   img: "E-commerce.png",
    // },
    {
      project: "Pokédex Explorer - Pokémon Stats & Info App",
      about:
        "Developed an interactive, visually engaging Pokémon explorer app that fetches and displays Pokémon data dynamically — providing users with detailed stats, abilities, and type information in a clean, responsive UI.",
      technologies_used: {
        frontend: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)"],
        state_management: "React Hooks",
        api_integration: "Pokémon REST API",
        features: [
          "Dynamic Pokémon data rendering",
          "Custom-designed Pokémon cards",
          "Shimmer loading placeholders",
          "Responsive grid layout",
          "Error handling for missing data",
        ],
      },
      img: "Pokemon.png",
      Github: "https://github.com/Ramana16-cherkupally/React-Pokemon-project",
      DeployedLink: "https://react-pokemon-project-nine.vercel.app/",
    },

    {
      project: "URL Shortener",
      about:
        "Designed and developed a fast, reliable URL Shortener application to convert long, complex URLs into short, easy-to-share links. The project emphasizes performance, simplicity, and scalability, ensuring smooth redirections and persistent link management.",
      technologies_used: [
        "Node.js",
        "HTTP module",
        "Crypto module",
        "JSON file-based storage",
        "JavaScript",
      ],
      img: "generate-short-url.png",
      Github: "https://github.com/Ramana16-cherkupally/URLs-Shortener-node.js",
      DeployedLink: "",
    },
    {
      project: "Weather Forecasting App",
      about:
        "Created a user-friendly weather forecasting web app that fetches real-time weather data using the OpenWeather API, displaying detailed weather information like temperature, humidity, wind speed, and more.",
      technologies_used: {
        frontend: ["HTML5", "CSS3", "JavaScript"],
        API: "OpenWeather API",
        features: [
          "Real-time Weather Data",
          "Search Functionality",
          "Dynamic UI Updates",
          "Error Handling",
          "Responsive Design",
        ],
      },
      img: "weather-forecasting.png",
      Github: "https://github.com/Ramana16-cherkupally/weather-forecasting",
      DeployedLink: "https://weather-forecasting-y4wi.vercel.app/",
    },
    {
      project: "Todo List Website",
      about:
        "Designed a clean, responsive, and interactive Todo List web app using Bootstrap, HTML5, CSS3, and JavaScript — enabling users to add, manage, and delete tasks with persistent data storage in LocalStorage.",
      technologies_used: {
        frontend: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
        features: [
          "Add, Delete, and View Tasks",
          "LocalStorage Persistence",
          "Duplicate Task Prevention",
          "Responsive UI",
          "Error Handling",
        ],
      },
      img: "todolist.png",
      Github: "https://github.com/Ramana16-cherkupally/Todo-list-website",
      DeployedLink: "https://todo-list-website-sooty.vercel.app/",
    },
    {
      project: "Joke Generator App",
      about:
        "Built an interactive joke generator app that fetches random jokes from an external API, ensuring a fun and engaging user experience.",
      technologies_used: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        features: [
          "Fetches random jokes from icanhazdadjoke API",
          "Displays jokes dynamically on button click",
          "Handles API response and errors gracefully",
          "Fully responsive card layout",
          "Clean UI with Bootstrap styling",
        ],
      },
      img: "joke-generator.png",
      Github: "https://github.com/Ramana16-cherkupally/Random-joke-generator",
      DeployedLink: "https://random-joke-generator-black.vercel.app/",
    },
  ];

  return (
    <section className="container mt-5">
      <header className="col text-center">
        <div
          className="container row justify-content-center shadow-lg border-0 bg-gradient  w-auto "
          style={{
            background: "linear-gradient(135deg, #4A00E0, #8E2DE2)",
            borderRadius: "20px",
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
              PROJECTS
            </span>
          </div>

          {ProjectsData.map((Data, index) => (
            <div
              className="row row-cols-1 row-cols-lg-2 mb-3 shadow py-2 p-0 rounded mt-3"
              key={index}
            >
              <div className="order-1 order-md-0 text-start">
                <span className="d-block fs-5 mb-1 fw-semibold text-primary ">
                  <strong>Project:</strong> {Data.project}
                </span>
                <span className="d-block mb-1 text-muted">{Data.about}</span>
                <span className="d-block mb-2">
                  <strong className="text-dark">Technologies:</strong>
                  {Array.isArray(Data.technologies_used)
                    ? Data.technologies_used.join(", ")
                    : Object.values(Data.technologies_used).flat().join(", ")}
                </span>
                <div className="project-btn">
                  <a href={Data.Github} style={{ textDecoration: "none" }}>
                    <button
                      className="btn btn-primary modern-active shadow-lg fs-5 px-2 py-2 w-auto d-flex align-items-center me-2"
                      style={{ transition: "0.3s ease-in-out" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#8E2DE2")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#4A00E0")
                      }
                    >
                      View Projects <FaGithub style={{ fontSize: "24px" }} />
                    </button>
                  </a>
                  <a
                    href={Data.DeployedLink}
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      className="btn btn-primary modern-active shadow-lg fs-5 px-2 py-2 w-auto w-auto  d-flex align-items-center"
                      style={{
                        transition: "0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#8E2DE2")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "green")
                      }
                    >
                      DeployedLink
                      <BiSolidCaretRightCircle style={{ fontSize: "24px" }} />
                    </button>
                  </a>
                </div>
              </div>

              <div className="order-0 order-md-1 my-2 text-center">
                <img
                  className="img-fluid rounded"
                  src={Data.img}
                  alt="project-img"
                  style={{
                    height: "270px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </header>
    </section>
  );
};
