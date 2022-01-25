export const LOADING = 'LOADING';
export const LOADING_SUCCESS = 'LOADING_SUCCESS';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const loading = () => {
  return {
    type: LOADING,
  };
};

export const loadingSuccess = () => {
  return {
    type: LOADING_SUCCESS,
  };
};

export const add = (number) => {
  return {
    type: ADD,
    payload: number,
  };
};

export const subtract = (number) => {
  return {
    type: SUBTRACT,
    payload: number,
  };
};
