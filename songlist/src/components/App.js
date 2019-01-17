import React from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';
import { connect } from 'react-redux'

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      Hello there
      <SongList />
      </div>
    )
  }
}

export default App;
