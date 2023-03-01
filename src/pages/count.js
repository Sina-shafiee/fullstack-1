import React, { useState } from 'react';

const Count = ({ handleClick }) => {
  const [countState, setCountState] = useState(1123);

  return (
    <div>
      <button onClick={() => handleClick(countState)}>Click me</button>
    </div>
  );
};

export default Count;
