import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.myOnSubmit(this.state.term);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          onChange={(e)=> this.setState({term: e.target.value})}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;
