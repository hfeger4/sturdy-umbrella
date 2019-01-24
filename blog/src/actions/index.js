import jsonplaceholder from '../apis/jsonPlaceholder';

const FETCH_POSTS = "FETCH_POSTS";

export const fetchPosts = async () => {
  const response = await jsonplaceholder.get('/posts');
  return {
    type: FETCH_POSTS,
    payload: response
  };
};
