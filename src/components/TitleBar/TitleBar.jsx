import React from "react";
const TitleBar = (props) => {
  return (
    <div className="container" id="titleBar">
      <div className="row justify-content-md-center">
        <div className="col-1">
          <button className="btn btn-outline-dark" type="button" onClick={() => props.goHome()}>
            Home
          </button>
        </div>
        <div className="col-6">
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
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
