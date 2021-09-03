// import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../axios';

// initialState
const initialState = {
    product: [],
  };

// test
export const getTest = () => {
  return function (dispatch, getState, { history }) {
    instance
    .get(`/api`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
};

// redux
const product = createSlice({
    name: 'product',
    initialState,
    reducers: {},
  });
  
  
  export default product;