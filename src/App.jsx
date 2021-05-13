import React, { Component } from "react";
import axios from "axios";
import Comments from "./components/Comments/Comments";
import "./App.css";
import TitleBar from "./components/TitleBar/TitleBar";
import SearchResultsContainer from "./components/SearchResultsContainer/SearchResultsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoInfo: [],
      search: "My Little Pony",
      showResultsContainer: true,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/comments/")
      .then((res) => {
        console.log("get all comments", res);
        const info = res.data;
        this.setState({
          videoInfo: info,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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

  getComments() {
    axios
      .get("http://localhost:5000/api/comments/")
      .then((res) => {
        console.log("get all comments", res);
        const info = res.data;
        this.setState({
          videoInfo: info,
          commentInfo: info,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container w-100 h-100 align-items-center">
        <h1 className="text-center h-100">YOUTUBE CLONE</h1>
        <TitleBar />
        <SearchResultsContainer />
        <h1> Hello World! </h1>
        <Comments addNewComment={this.addNewComment.bind(this)} />
      </div>
    );
  }
}

export default App;
