// import { useState } from 'react';
import authApi from '../../api/authApi';

export const login = (data) => (dispatch) => {
  // const [err, setErr] = useState('');

  authApi
    .login(data)
    .then((res) => {
      dispatch({ type: 'LOGIN', payload: res.data.user });
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.user.token);
    })
    .catch((err) => console.log(err.response.data.message));
};
