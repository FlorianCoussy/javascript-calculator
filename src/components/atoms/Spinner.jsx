import React from 'react';

import './Spinner.scss';

const Spinner = () => (
  <div className="spinner">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="circle">
        <div className="inner" />
      </div>
    ))}
  </div>
);

export default Spinner;