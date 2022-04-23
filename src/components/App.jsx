import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'the-new-css-reset/css/reset.css';

import fakeLoading from '../lib/fakeLoading';
import { loading, loadingSuccess, add } from '../store/actions';
import Spinner from './atoms/Spinner';
import CalculatorIcon from './atoms/CalculatorIcon';
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

  return (
    <>
      {(isLoading) ? (
        <Spinner />
      ) : (
        <div id="calculator">
          <CalculatorIcon />

          <div id="screen">
            <div id="statement">4,900 + 15,910</div>
            <div id="display">20,810</div>
          </div>

          <div id="keypad">
            <button id="clear">
              <span>C</span>
            </button>
            <button id="add">
              <span>+</span>
            </button>
            <button id="subtract">
              <span>-</span>
            </button>
            <button id="multiply">
              <span>x</span>
            </button>
            <button id="divide">
              <span>/</span>
            </button>
            <button id="decimal">
              <span>.</span>
            </button>
            <button id="zero">
              <span>0</span>
            </button>
            <button id="one">
              <span>1</span>
            </button>
            <button id="two">
              <span>2</span>
            </button>
            <button id="three">
              <span>3</span>
            </button>
            <button id="four">
              <span>4</span>
            </button>
            <button id="five">
              <span>5</span>
            </button>
            <button id="six">
              <span>6</span>
            </button>
            <button id="seven">
              <span>7</span>
            </button>
            <button id="eight">
              <span>8</span>
            </button>
            <button id="nine">
              <span>9</span>
            </button>
            <button id="equals">
              <span>=</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
