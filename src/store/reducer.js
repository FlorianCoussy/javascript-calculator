import { combineReducers } from 'redux';
import initialState from './state';
import { LOADING, LOADING_SUCCESS, ADD, SUBTRACT } from './actions';

const loadingReducer = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case LOADING:
      return true;
    case LOADING_SUCCESS:
      return false;
    default:
      return state;
  };
};

const calculatorReducer = (state = initialState.calculator, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case SUBTRACT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  };
};

const reducer = combineReducers({
  loading: loadingReducer,
  calculator: calculatorReducer
});

export default reducer;
