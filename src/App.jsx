import React, { Component } from "react";
import axios from "axios";
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
      showMainView: false,
      activeVideoId: "",
      apiKey: "AIzaSyBpfAy7-ajjegw-Y80FJejrhNfnqAMUrsQ",
      youTubeVideoData: [],
      relatedVideos: [],
      loading: true,
      text: "",
      videoId: "",
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

  postComments(comments) {
    axios
      .post("http://localhost:5000/api/comments/", comments)
      .then((res) => {
        console.log("post comment", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //post Reply

  handleSubmit(event) {
    event.preventDefault();
    switch (event.target.name) {
      case "comment":
        console.log("comment", event);
        console.log(this.state.text);
        console.log(this.state.videoId);
        const comment = {
          text: this.state.text,
          videoId: this.state.videoId,
        };
        this.postComments(comment);
        break;
      case "search":
        if (this.state.showResultsContainer === false) {
          this.setState({
            showResultsContainer: true,
            showMainView: false,
          });
        }
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

  setPlayer(videoID) {
    this.setState({
      activeVideoId: videoID,
    });
    this.toggleView("showMainView");
    this.toggleView("showResultsContainer");
  }

  render() {
    return (
      <div className="container w-100 h-100 align-items-center">
        {this.state.loading === true ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1 className="text-center h-100">YOUTUBE CLONE</h1>
            <TitleBar
              handleChange={(ev) => this.handleChange(ev)}
              handleSubmit={(ev) => this.handleSubmit(ev)}
            />
            {this.state.showResultsContainer === true ? (
              <SearchResultsContainer
                videos={this.state.youTubeVideoData}
                setPlayer={(id) => this.setPlayer(id)}
              />
            ) : null}
          </>
        )}
        {this.state.showMainView === true ? (
          <MainView
            videoId={this.state.activeVideoId}
            handleSubmit={(e) => this.handleSubmit(e)}
            handleChange={(e) => this.handleChange(e)}
            videoData={this.state.youTubeVideoData}
            postComments={this.postComments}
            text={this.state.text}
          />
        ) : null}
      </div>
    );
  }
}
export default App;
