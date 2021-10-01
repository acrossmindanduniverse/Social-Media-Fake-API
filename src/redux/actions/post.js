import axios from 'axios';

export const getPost = () => async (dispatch) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch({
    type: 'GET_POST',
    payload: data,
  });
};

export const getComment = (id) => async (dispatch) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  dispatch({
    type: 'GET_COMMENT',
    payload: data,
  });
};

export const getUserPost = (id) => async (dispatch) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  dispatch({
    type: 'GET_USER_POST',
    payload: data,
  });
};
// https://jsonplaceholder.typicode.com/posts?userId=1
export const updatePost = (setData, id) => async (dispatch) => {
  const { data } = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    id: setData.id,
    userId: setData.sUserId,
    title: setData.sTitle,
    body: setData.sBody,
  });
  console.log(`https://jsonplaceholder.typicode.com/posts/${id}`, 'test setdata');
  dispatch({
    type: 'UPDATE_USER_POST',
    payload: data,
  });
};

export const postData = (setData) => async (dispatch) => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: setData.title,
    body: setData.body,
    userId: setData.userId,
  });
  dispatch({
    type: 'POST_DATA',
    payload: data,
  });
};

export const deletePost = (id) => async (dispatch) => {
  const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  dispatch({
    type: 'DELETE_POST',
    payload: data,
  });
};

export const postComment = (setData, id) => async (dispatch) => {
  const { data } = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    postId: setData.postId,
    body: setData.body,
  });
  dispatch({
    type: 'POST_COMMENT',
    payload: data,
  });
};
