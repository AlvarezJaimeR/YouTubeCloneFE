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
      starterSearches: [
        "pokemon",
        "warhammer 40k",
        "Mass Effect",
        "Skateboarding",
        "Longboarding",
        "Scooters",
        "Hoverboard",
        "Cars",
        "Gaming",
      ],
      search: "",
      showResultsContainer: true,
      showMainView: false,
      activeVideoId: "",
      activeVideoComments: [],
      // apiKey: "AIzaSyBpfAy7-ajjegw-Y80FJejrhNfnqAMUrsQ", //JR
      // apiKey: "AIzaSyBC3SI9BThQnsH-fsXvYop7Evr-3D2sSqE", //Danny
      apiKey: "AIzaSyAArmkAhC1ST7wyMlnHOBBt5tS-EwblT1Y", //Plan C
      youTubeVideoData: [],
      relatedVideosData: [],
      loading: true,
      text: "",
      videoId: "",
    };
  }

  componentDidMount() {
    this.getComments();
    this.randomSearch();
    this.searchYouTubeVideos();
  }

  randomSearch() {
    const searchIndex = Math.trunc(Math.random() * this.state.starterSearches.length);
    console.log(searchIndex);
    const randomAnswer = this.state.starterSearches[searchIndex];
    console.log(randomAnswer);
    this.setState({
      search: randomAnswer,
    });
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

  async setPlayer(videoID) {
    this.setState({
      activeVideoId: videoID,
    });
    await this.setRelatedVideosContent();
    this.toggleView("showMainView");
    this.toggleView("showResultsContainer");
  }

  async setRelatedVideosContent() {
    try {
      const response = await this.getYouTubeVideosPromise(this.state.search, this.state.apiKey);
      this.setState({
        relatedVideosData: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getRelatedVideosPromise(apiKey) {
    return new Promise((res, rej) => {
      const response = axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.state.activeVideoId}&type=video&key=${apiKey}`
      );
      if (response != null) {
        res(response);
      } else {
        rej(
          new Error(
            `Unable to access related video data using video ID: ${this.state.activeVideoId} & API Key ${apiKey} `
          )
        );
      }
    });
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
            relatedVideosData={this.state.relatedVideosData}
            postComments={this.postComments}
            text={this.state.text}
          />
        ) : null}
      </div>
    );
  }
}
export default App;
