import React from "react";
const TitleBar = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-1">
          <button className="btn btn-outline-dark">Home</button>
        </div>
        <div className="col-8">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid w-100">
              <form
                className="d-flex w-100"
                name="search"
                onSubmit={(event) => props.handleSubmit(event)}
              >
                <input
                  className="form-control"
                  type="search"
                  name="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(event) => props.handleChange(event)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
