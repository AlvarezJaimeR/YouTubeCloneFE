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
      search: "pokemon",
      showResultsContainer: true,
      showMainView: false,
      activeVideoId: "",
      activeVideoTitle: "",
      activeVideoDescription: "",
      activeVideoComments: [],
      // apiKey: "AIzaSyBpfAy7-ajjegw-Y80FJejrhNfnqAMUrsQ", //JR
      // apiKey: "AIzaSyBC3SI9BThQnsH-fsXvYop7Evr-3D2sSqE", //Danny
      // apiKey: "AIzaSyAArmkAhC1ST7wyMlnHOBBt5tS-EwblT1Y", //Plan C
      youTubeVideoData: [],
      relatedVideosData: [],
      loading: true,
      text: "",
      commentInfo: []
    };
    this.postReply=this.postReply.bind(this);
    this.getComments=this.getComments.bind(this);
    this.updateLike=this.updateLike.bind(this);
    this.updateDislike=this.updateDislike.bind(this);
  }

  componentDidMount() {
    this.getComments();
    // this.randomSearch();
    // this.searchYouTubeVideos();
    this.testingYouTubeSearch();
  }

  randomSearch() {
    const randomSearch =
      this.state.starterSearches[Math.floor(Math.random() * this.state.starterSearches.length)];
    console.log(randomSearch);
    this.setState({
      search: randomSearch,
    });
  }

  // `https://www.googleapis.com/youtube/v3/search?q=${searchString}&key=${apiKey}`
  // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${searchString}&key=${apiKey}`
  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&pageToken=CAkQAA&q=pokemon&key=[YOUR_API_KEY]
  searchYouTubeVideos() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${this.state.search}&key=${this.state.apiKey}`
      )
      .then((response) => {
        this.setState({
          youTubeVideoData: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getTestDataVideos() {
    return new Promise((res, rej) => {
      const response = {
        data: {
          items: [
            {
              id: {
                videoId: "1",
            },
              snippet: {
                title: "1",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "12",
              },
              snippet: {
                title: "12",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "123",
              },
              snippet: {
                title: "123",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "1234",
              },
              snippet: {
                title: "1234",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "12345",
              },
              snippet: {
                title: "12345",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "123456",
              },
              snippet: {
                title: "123456",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "1234567",
              },
              snippet: {
                title: "1234567",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "12345678",
              },
              snippet: {
                title: "12345678",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "123456789",
              },
              snippet: {
                title: "123456789",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            ,
          ],
        },
      };
      if (response != null) {
        res(response);
      } else {
        rej(new Error(`Trash`));
      }
    });
  }

  async testingYouTubeSearch() {
    try {
      const response = await this.getTestDataVideos();
      this.setState({
        youTubeVideoData: response.data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getTestDataRelatedVideos() {
    return new Promise((res, rej) => {
      const response = {
        data: {
          items: [
            {
              id: {
                videoId: "a",
              },
              snippet: {
                title: "a",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "ab",
              },
              snippet: {
                title: "ab",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "abc",
              },
              snippet: {
                title: "abc",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
            {
              id: {
                videoId: "abcd",
              },
              snippet: {
                title: "abcd",
                thumbnails: {
                  medium: {
                    url: "https://i.ytimg.com/vi/bay37qWN6DI/mqdefault.jpg",
                  },
                },
              },
            },
          ],
        },
      };
      if (response != null) {
        res(response);
      } else {
        rej(new Error(`Trash`));
      }
    });
  }

  async setTestRelatedVideosContent() {
    try {
      const response = await this.getTestDataRelatedVideos();
      this.setState({
        relatedVideosData: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getComments = () => {
    {console.log('hit get comments')}
    axios
      .get("http://localhost:5000/api/comments/")
      .then((res) => {
        const info = res.data;
        this.setState({
          commentInfo: info,
          text: "",
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

  async postReply(reply, index) {
    const filteredIdArray = this.state.commentInfo.filter(
        (comment) => comment.videoId === this.state.activeVideoId
      );
    axios
      .post(
        "http://localhost:5000/api/comments/"+
          filteredIdArray[index]._id+
          "/replies", reply)
      .then((res) => {
        console.log("post reply", res);
        this.getComments();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateLike(like, index) {
    console.log('update like:', like);
    const filteredIdArray = this.state.commentInfo.filter(
      (comment) => comment.videoId === this.state.activeVideoId
    );
    console.log('update Like', filteredIdArray);
    axios.put("http://localhost:5000/api/comments/"+
      filteredIdArray[index]._id+
      "/likes")
    .then (res => {
      console.log(res);
      this.getComments();
    })
    .catch(err => {
      console.log(err)
    })
  }

  updateDislike(dislike, index) {
    console.log('update dislike:', dislike);
    const filteredIdArray = this.state.commentInfo.filter(
      (comment) => comment.videoId === this.state.activeVideoId
    );
    console.log('update dislike', filteredIdArray);
    axios.put("http://localhost:5000/api/comments/"+
      filteredIdArray[index]._id+
      "/dislikes")
    .then (res => {
      console.log(res);
      this.getComments();
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    switch (event.target.name) {
      case "comment":
        console.log("comment", event);
        console.log(this.state.text);
        console.log(this.state.activeVideoId);
        const comment = {
          text: this.state.text,
          videoId: this.state.activeVideoId,
        };
        this.postComments(comment);
        this.getComments();
        break;
      case "search":
        if (this.state.showResultsContainer === false) {
          this.setState({
            showResultsContainer: true,
            showMainView: false,
          });
        }
        this.searchYouTubeVideos();
        break;
      default:
        break;
    }
  }

  handleChange(event) {
    console.log("handle change", event);
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

  async setPlayer(video) {
    this.setState({
      activeVideoId: video.id.videoId,
      activeVideoTitle: video.snippet.title,
      activeVideoDescription: video.snippet.description,
    });
    // await this.setRelatedVideosContent(video.id.videoId);
    await this.setTestRelatedVideosContent();
    this.toggleView("showMainView");
    this.toggleView("showResultsContainer");
  }

  async updateActiveVideo(video) {
    this.setState({
      activeVideoId: video.id.videoId,
      activeVideoTitle: video.snippet.title,
      activeVideoDescription: video.snippet.description,
    });
    //await this.setRelatedVideosContent(video.id.videoId);
    await this.setTestRelatedVideosContent();
  }

  async setRelatedVideosContent(id) {
    try {
      const response = await this.getRelatedVideosPromise(id, this.state.apiKey);
      this.setState({
        relatedVideosData: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getRelatedVideosPromise(id, apiKey) {
    return new Promise((res, rej) => {
      const response = axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&relatedToVideoId=${id}&type=video&key=${apiKey}`
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

  goHome() {
    this.setState({
      showResultsContainer: true,
      showMainView: false,
    });
  }

  changePage(tokenID) {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&pageToken=${tokenID}&q=${this.state.search}&key=${this.state.apiKey}`
      )
      .then((response) => {
        this.setState({
          youTubeVideoData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container w-100 h-100 align-items-center">
        {this.state.loading === true ? (
          <h1>Loading...</h1>
        ) : (
          <div className="container" id="title">
            <h1 className="text-center h-100" id="appName">
              YOUTUBE CLONE
            </h1>
            <TitleBar
              handleChange={(ev) => this.handleChange(ev)}
              handleSubmit={(ev) => this.handleSubmit(ev)}
              goHome={() => this.goHome()}
            />
            <br />
            <br />
            {this.state.showResultsContainer === true ? (
              <SearchResultsContainer
                videos={this.state.youTubeVideoData}
                setPlayer={(video) => this.setPlayer(video)}
                changePage={(id) => this.changePage(id)}
              />
            ) : null}
          </div>
        )}
        {this.state.showMainView === true ? (
          <MainView
            updateActiveVideo={(video) => this.updateActiveVideo(video)}
            activeVideoId={this.state.activeVideoId}
            activeVideoTitle={this.state.activeVideoTitle}
            activeVideoDescription={this.state.activeVideoDescription}
            handleSubmit={(e) => this.handleSubmit(e)}
            handleChange={(e) => this.handleChange(e)}
            relatedVideosData={this.state.relatedVideosData}
            text={this.state.text}
            commentInfo={this.state.commentInfo}
            postReply={this.postReply}
            getComments={this.getComments}
            updateLike={this.updateLike}
            updateDislike={this.updateDislike}
          />
        ) : null}
      </div>
    );
  }
}
export default App;
