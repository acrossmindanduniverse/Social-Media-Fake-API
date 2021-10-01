import axios from 'axios';

export const getUserProfile = (id) => async (dispatch) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  dispatch({
    type: 'GET_PROFILE',
    payload: data[0],
  });
};

export const getUsers = () => async (dispatch) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: 'GET_USERS',
    payload: data,
  });
};