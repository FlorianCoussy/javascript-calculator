import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import "the-new-css-reset/css/reset.css";

import fakeLoading from '../lib/fakeLoading';
import { loading, loadingSuccess, add } from '../store/actions';
import './App.scss';

const App = ({ isLoading, calculator, loading, loadingSuccess, add }) => {
  const handleClick = () => {
    add(1);
  };

  useEffect(() => fakeLoading(loading, loadingSuccess), []);

  return (
    <div>
      {
        (isLoading) ? (<>Loading</>) : (
          <>
            <button onClick={handleClick}>+1</button>
            <div>{calculator.value}</div>
          </>
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading,
    calculator: state.calculator
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (number) => dispatch(add(number)),
    loading: () => dispatch(loading()),
    loadingSuccess: () => dispatch(loadingSuccess())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
