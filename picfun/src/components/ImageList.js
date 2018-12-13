import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component{
  constructor(props){
    super(props);

  }
  showImages(){
    return this.props.images.map((image) => {
      return <
      ImageCard
      image={image}
      key={image.id}
      />
    });
  }
  render(){
    return (
      <div className="image-list">
        {this.showImages()}
      </div>
    )
  }
}

export default ImageList;
