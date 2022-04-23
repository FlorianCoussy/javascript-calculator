import React from 'react';

import './Keypad.scss';

const Keypad = () => (
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
);

export default Keypad;
