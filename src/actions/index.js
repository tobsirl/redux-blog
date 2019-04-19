import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPostsAndUsers = () => async dispatch => {
  console.log('About to fetch posts');
  await dispatch(fetchPosts());
  console.log('Fetched Posts');
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get(`/posts`);

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
