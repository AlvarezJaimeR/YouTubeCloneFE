import React, { Component } from "react";
import axios from "axios";
import Comments from "./components/Comments/Comments";
import "./App.css";
import TitleBar from "./components/TitleBar/TitleBar";
import SearchResultsContainer from "./components/SearchResultsContainer/SearchResultsContainer";
import MainView from "./components/MainView/MainView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoInfo: [],
      search: "Pokemon",
      showResultsContainer: true,
      apiKey: "AIzaSyBpfAy7-ajjegw-Y80FJejrhNfnqAMUrsQ",
      youTubeVideoData: [],
      loading: true,
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
        youTubeVideoData: response.data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getYouTubeVideosPromise(searchString, apiKey) {
    return new Promise((res, rej) => {
      const response = axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchString}&key=${apiKey}`
      );
      if (response != null) {
        res(response);
      } else {
        rej(new Error(`Unable to access data using Search: ${searchString} & API Key ${apiKey} `));
      }
    });
  }

  getComments() {
    axios
      .get("http://localhost:5000/api/comments/")
      .then((res) => {
        const info = res.data;
        this.setState({
          commentInfo: info,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    switch (event.target.name) {
      case "search":
        this.setState({
          search: this.state.search,
        });
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
    if (this.state.loading === true) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    if (this.state.loading === false) {
      return (
        <div className="container w-100 h-100 align-items-center">
          <h1 className="text-center h-100">YOUTUBE CLONE</h1>
          <TitleBar
            handleChange={(ev) => this.handleChange(ev)}
            handleSubmit={(ev) => this.handleSubmit(ev)}
          />
          <SearchResultsContainer videos={this.state.youTubeVideoData} />
          <MainView />
          <Comments />
        </div>
      );
    }
  }
}

export default App;
