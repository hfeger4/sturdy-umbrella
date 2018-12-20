import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtubes";
import VideoList from "./VideoList";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
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
  render() {
    return (
      <div className="ui container">
        <SearchBar myOnSubmit={this.myOnSubmit} />
        <div className="list">
          I have {this.state.videos.length} videos.
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
