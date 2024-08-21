import React from 'react';

const Scoreboard = ({ playerScore, computerScore, draws }) => {
  return (
    <div className="scoreboard">
      <h2>Placar</h2>
      <p>Jogador: {playerScore}</p>
      <p>Computador: {computerScore}</p>
      <p>Empates: {draws}</p>
    </div>
  );
};

export default Scoreboard;