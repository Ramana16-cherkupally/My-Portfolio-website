import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
export const Contact = () => {
  const Navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    Navigate("/");
  };
  return (
    <div className="container my-5 shadow p-2">
      <div className="d-flex align-items-center justify-content-between py-2">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span
            className="btn btn-primary align-items-center justify-content-start modern-active shadow fs-5  px-1 py-2 w-auto d-flex gap-1 "
            style={{
              transition: "0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#8E2DE2")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#4A00E0")}
          >
            <FaArrowLeft /> Back To
            <FaHome style={{ fontSize: "24px" }} />
          </span>
        </Link>

        <span
          className="p-heading display-6 fw-bold position-absolute start-50 translate-middle-x w-100"
          style={{ color: "#6A11CB" }}
        >
          Get In Touch
        </span>
      </div>
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <form onSubmit={HandleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn  fs-5 px-2 py-2 w-auto "
              style={{
                background: "linear-gradient(90deg, #6A11CB, #2575FC)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "2rem",
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 15px rgba(106, 17, 203, 0.7)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="fw-bold">Or reach me at:</p>
        <a
          href="https://mail.google.com/mail/?view=cm&to=venkatacherkupally@gmail.com"
          class="btn btn-primary fs-5 px-2 py-2 w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          📧 Email Me
        </a>

        <p className="fw-bold mt-1">Phone: +91 9244389942</p>
      </div>
    </div>
  );
};
