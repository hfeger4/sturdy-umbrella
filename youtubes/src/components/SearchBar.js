import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.myOnSubmit(this.state.term);
  };
  render() {
    console.log(this.state);
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div>
            <label>Video Search</label>
            <input onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
