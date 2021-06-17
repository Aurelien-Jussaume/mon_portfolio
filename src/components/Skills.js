const skills = (
  <div className="container">
    <div
      className="container-fluid text-white-50"
      style={{ borderRadius: 25, padding: 25, paddingBottom: 120 }}
    >
      <h1 className="display-3">Skills</h1>
      <hr
        style={{
          width: "7.5%",
          height: "1vh",
          opacity: "100%",
          backgroundColor: "#7dba5c",
        }}
      />
      <br></br>
      <div className="row">
        <div className="col">
          <div className="d-flex bd-highlight">
            <div className="p-2 me-auto bd-highlight display-6">HTML</div>
            <div
              className="p-2 bd-highlight display-6"
              style={{ color: "#7dba5c" }}
            >
              75%
            </div>
          </div>
          <div className="progress" style={{ backgroundColor: "grey" }}>
            <div
              className="progress progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "75%", backgroundColor: "#3d3d3d" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex bd-highlight">
            <div className="p-2 me-auto bd-highlight display-6">CSS3</div>
            <div
              className="p-2 bd-highlight display-6"
              style={{ color: "#7dba5c" }}
            >
              70%
            </div>
          </div>
          <div className="progress" style={{ backgroundColor: "grey" }}>
            <div
              className="progress progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "70%", backgroundColor: "#3d3d3d" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col">
          <div className="d-flex bd-highlight">
            <div className="p-2 me-auto bd-highlight display-6">PHP</div>
            <div
              className="p-2 bd-highlight display-6"
              style={{ color: "#7dba5c" }}
            >
              55%
            </div>
          </div>
          <div className="progress" style={{ backgroundColor: "grey" }}>
            <div
              className="progress progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "55%", backgroundColor: "#3d3d3d" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex bd-highlight">
            <div className="p-2 me-auto bd-highlight display-6">JAVASCRIPT</div>
            <div
              className="p-2 bd-highlight display-6"
              style={{ color: "#7dba5c" }}
            >
              40%
            </div>
          </div>
          <div className="progress" style={{ backgroundColor: "grey" }}>
            <div
              className="progress progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "40%", backgroundColor: "#3d3d3d" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col">
        <i class="fab fa-html5" style={{ fontSize: "50px" }}></i>
        </div>
        <div className="col">
        <i class="fab fa-css3-alt" style={{ fontSize: "50px" }}></i>
        </div>
        <div className="col">
        <i class="fab fa-php" style={{ fontSize: "50px" }}></i>
        </div>
        <div className="col">
        <i class="fab fa-js-square" style={{ fontSize: "50px" }}></i>
        </div>
        <div className="col">
        <i class="fab fa-react" style={{ fontSize: "50px" }}></i>
        </div>
        <div className="col">
        <i class="fab fa-node" style={{ fontSize: "50px" }}></i>
        </div>
        <div className="col">
        <i class="fab fa-laravel" style={{ fontSize: "50px" }}></i>
        </div>
        <div className="col">
        <i class="fab fa-symfony" style={{ fontSize: "50px" }}></i>
        </div>
      </div>
    </div>
  </div>
);

export default skills;
