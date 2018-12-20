import axios from 'axios';

const KEY = 'AIzaSyDSomW5ro4XT7id6_hPHhHurCzbejQEBIw';
const BASEURL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
  baseURL: BASEURL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
