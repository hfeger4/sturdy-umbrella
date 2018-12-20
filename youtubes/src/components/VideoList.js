import React from "react";
import './images.css';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderThumbnails() {
    const renderedList = this.props.videos.map(video => {
      return (
        <VideoItem
        key={`${video.id.videoId}`}
        onVideoSelect={this.props.onVideoSelect}
        video={video}/>
      );
    });
    return renderedList;
  }
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderThumbnails()}
      </div>
    );
  }
}

export default VideoList;
