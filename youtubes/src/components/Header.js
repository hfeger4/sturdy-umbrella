import React from 'react';
import './Header.css';

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="ui block header">
      Quick Youtube Search
      </div>
    )
  }
}

export default Header;
