import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtubes";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Header from './Header';
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
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
      });
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount(){
    this.myOnSubmit("dogs");
  }
  render() {
    return (
      <div>
      <Header />
      <div className="ui container">
        <SearchBar myOnSubmit={this.myOnSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
