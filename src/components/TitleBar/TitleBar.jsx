import React from "react";
const TitleBar = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        {/* <div className="col col-lg-2">1 of 3</div> */}
        {/* <div className="col-md-auto">Variable width content</div> */}
        <div className="col-md-auto">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  name="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={() => props.handleSubmit()}
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
        {/* <div className="col col-lg-2">3 of 3</div> */}
      </div>
      {/* <div className="row"> */}
      {/* <div className="col">1 of 3</div> */}
      {/* <div className="col-md-auto">Variable width content</div> */}
      {/* <div className="col col-lg-2">3 of 3</div> */}
      {/* </div> */}
    </div>
  );
};

export default TitleBar;
