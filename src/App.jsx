import React, {Component} from 'react';
import axios from 'axios';
import Comments from './components/Comments/Comments';
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
      loading: true
    }
  }

  componentDidMount() {
    this.getComments();
    this.searchYouTubeVideos();
  }

  async searchYouTubeVideos() {
    try {
      const response = await this.getYouTubeVideosPromise(this.state.search, this.state.apiKey);
      console.log('response youtubeVid', response);
      this.setState({
        youTubeVideoData: response.data,
        loading: false
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
        console.log('promise', response); 
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
        console.log("get all comments", res);
        const info = res.data;
        this.setState({
          commentInfo: info,
        });
      })
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
    if (this.state.loading === true) {
      return (
        <div>
            <h1>Loading...</h1>
        </div>
      )
    }
    if (this.state.loading === false){
      return (
        <div className="container w-100 h-100 align-items-center">
          <h1 className="text-center h-100">YOUTUBE CLONE</h1>
          <TitleBar />
          <SearchResultsContainer videos={this.state.youTubeVideoData} />
          <h1> Hello World! </h1>
          <Comments />
        </div>
      );
    }
  }
}

export default App;
