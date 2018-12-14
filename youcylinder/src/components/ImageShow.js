import React from 'react';

class ImageShow extends React.Component{
  constructor(props){
    super(props);
    this.renderImages = this.renderImages.bind(this);
  }
  renderImages(){
    return this.props.images.map(image => {
      return(
        <img
          key={image.id}
          alt={image.description}
          src={image.urls.small}
        />
      )
    })
  }
  render(){
    return(
      <div>
        {this.renderImages()}
      </div>
    )
  }
}

export default ImageShow;
