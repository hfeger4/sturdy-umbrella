const SONG_SELECTED = 'SONG_SELECTED';

export const selectSong = (song) => {
  return {
    type: SONG_SELECTED,
    payload: song
  };
};
