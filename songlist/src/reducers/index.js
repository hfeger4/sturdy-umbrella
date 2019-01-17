import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05'},
    { title: 'All Star', duration: '2:35'},
    { title: 'I want it that way!', duration: '2:45'},
    { title: 'Somnus Nemoris', duration: '3:00'}
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if( action.type === 'SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});