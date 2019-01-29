import jsonPlaceholder from '../apis/jsonPlaceholder';

const FETCH_POSTS = "FETCH_POSTS";

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data});
}

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type: 'FETCH_USER', payload: response.data});
}
