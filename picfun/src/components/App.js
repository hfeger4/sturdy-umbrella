import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    // this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  onSearchSubmit = async (term) =>{
    const response = await unsplash
    .get('/search/photos',{
      params: { query: term },
    });

    this.setState({ images: response.data.results})
  }
  render() {
    console.log(this.state.images); //images.urls.small
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar myOnSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
