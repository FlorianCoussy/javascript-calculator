import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'the-new-css-reset/css/reset.css';

import fakeLoading from '../lib/fakeLoading';
import { loading, loadingSuccess, add } from '../store/actions';
import Calculator from './organisms/Calculator';
import Spinner from './atoms/Spinner';
import './App.scss';

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

const App = ({ isLoading, calculator, loading, loadingSuccess }) => {
  useEffect(() => fakeLoading(loading, loadingSuccess), []);

  return isLoading ? <Spinner /> : <Calculator />;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
