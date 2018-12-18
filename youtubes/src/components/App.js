import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  myOnSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar myOnSubmit={this.myOnSubmit} />
        App
      </div>
    );
  }
}

export default App;
