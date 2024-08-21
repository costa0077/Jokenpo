import React from 'react';

const Result = ({ result }) => {
  return (
    <div className="result">
      <h2>Resultado</h2>
      <p>{result}</p>
    </div>
  );
};

export default Result;