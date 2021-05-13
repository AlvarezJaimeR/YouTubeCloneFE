import React, { Component } from "react";
import "./App.css";
import TitleBar from "./components/TitleBar/TitleBar";
import SearchResultsContainer from "./components/SearchResultsContainer/SearchResultsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "My Little Pony",
      showResultsContainer: true,
    };
  }

  componentDidMount() {}

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  toggleView(component) {
    this.setState({
      [component]: !this.state[component],
    });
  }

  render() {
    return (
      <div className="contrainer w-100 h-100 alight-items-center">
        <h1 className="text-center h-100">YOUTUBE CLONE</h1>
        <TitleBar />
        <SearchResultsContainer />
      </div>
    );
  }
}

export default App;
