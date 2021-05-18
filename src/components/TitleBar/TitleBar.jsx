import React from "react";
const TitleBar = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <nav className="navbar navbar-dark bg-light">
            <div className="container-fluid">
              <form
                className="d-flex"
                name="search"
                onSubmit={(event) => props.handleSubmit(event)}
              >
                <input
                  className="form-control me-2"
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
