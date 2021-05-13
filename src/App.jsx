import React, {Component} from 'react';
import axios from 'axios';
import Comments from './components/Comments/Comments';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videoInfo: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/comments/")
    .then(res => {
      console.log('get all comments', res);
      const info = res.data;
      this.setState({
        videoInfo: info
      })
    })
      .catch(err => {
        console.log(err)
    })
  }

  render() { 
    return ( 
      <div>
        <h1> Hello World! </h1>
        <Comments />
      </div>
    );
  }
}
 
export default App;