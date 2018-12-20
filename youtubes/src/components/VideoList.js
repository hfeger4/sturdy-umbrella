import React from "react";
import './images.css';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderThumbnails() {
    return this.props.videos.map(video => {
      return (
        <div>
          <img
          alt={video.id}
          src={video.snippet.thumbnails.default.url}
          />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        My List: {this.props.videos.length}
        {this.renderThumbnails()}
      </div>
    );
  }
}

export default VideoList;
