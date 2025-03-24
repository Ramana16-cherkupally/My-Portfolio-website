export const AboutMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12 offset-lg-0 offset-1 w-100">
          <h4>Skills Snapshot:</h4>
          <div className="names my-3">
            <h4>HTML</h4>
            <div className="progress ">
              <div
                className="  progress-bar progress-bar-striped progress-bar-animated bg-info"
                style={{ width: "100%" }}
              >
                100%
              </div>
            </div>
          </div>

          <div className="names my-3">
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

          <div className="names my-3">
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

          <div className="names my-3">
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

          <div className="names my-3">
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
      </div>
    </div>
  );
};
