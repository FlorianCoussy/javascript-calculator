import React from 'react';

import CalculatorIcon from '../atoms/CalculatorIcon';
import Display from '../molecules/Display';
import Keypad from '../molecules/Keypad';
import './Calculator.scss';

const Calculator = () => (
  <div id="calculator">
    <CalculatorIcon />
    <Display />
    <Keypad />
  </div>
);

export default Calculator;
