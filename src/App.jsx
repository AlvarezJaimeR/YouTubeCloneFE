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
      commentInfo: [],
      search: "My Little Pony",
      showResultsContainer: true,
      apiKey: "AIzaSyBpfAy7-ajjegw-Y80FJejrhNfnqAMUrsQ",
      youTubeVideoData: [],
    };
  }

  componentDidMount() {
    this.getComments();
    this.searchYouTubeVideos();
  }

  async searchYouTubeVideos() {
    try {
      const response = await this.getYouTubeVideosPromise(this.state.search, this.state.apiKey);
      this.setState({
        commentInfo: info
      })
      }catch(err) {
        console.log(err);
      };
  }

  handleSubmit(event) {
    event.preventDefault();
    switch (event) {
      case "search":
        this.searchYouTubeVideos();
        break;

      default:
        break;
    }
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
      <div className="container w-100 h-100 align-items-center">
        <h1 className="text-center h-100">YOUTUBE CLONE</h1>
        <TitleBar />
        <SearchResultsContainer videos={this.state.youTubeVideoData} />
        <h1> Hello World! </h1>
        <Comments addNewComment={this.addNewComment.bind(this)}/>
      </div>
    );
  }
}

export default App;
