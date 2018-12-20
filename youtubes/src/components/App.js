import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtubes";
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail';
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  myOnSubmit = term => {
    youtube
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(response => {
        this.setState({ videos: response.data.items });
        console.log(this.state.videos);
      });
  };
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar myOnSubmit={this.myOnSubmit} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
           />
      </div>
    );
  }
}

export default App;
