import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageShow from "./ImageShow";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.getSearchTerm = this.getSearchTerm.bind(this);
  }
  getSearchTerm(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID ????"
        }
      })
      .then(response => {
        this.setState({ images: response.data.results });
      });
    // console.log(this.state.images);
  }
  render() {
    return (
      <div>
        <SearchBar myOnSubmit={this.getSearchTerm} />
        <ImageShow images={this.state.images}/>
      </div>
    );
  }
}

export default App;
