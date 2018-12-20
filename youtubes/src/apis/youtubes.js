import axios from 'axios';


const BASEURL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
  baseURL: BASEURL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
