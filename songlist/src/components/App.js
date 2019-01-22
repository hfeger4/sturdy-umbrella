import React from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';
import { connect } from 'react-redux'
import SongDetail from './SongDetail';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
