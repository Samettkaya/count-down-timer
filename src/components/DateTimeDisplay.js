import React from 'react';

const DateTimeDisplay = ({ value, type, counter }) => {
  return (
    <div className={counter<=0 ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
