import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  onFormSubmit = e => {
    e.preventDefault();
    this.props.myOnSubmit(this.state.term);
    // console.log(this.state.term);
  };
  render() {
    // console.log(this.state.term);
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
