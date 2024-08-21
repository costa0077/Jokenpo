import React from 'react';

const Game = ({ playGame }) => {
  return (
    <div className="game-options">
      <img src="/images/pedra.png" alt="Pedra" onClick={() => playGame(0)} />
      <img src="/images/papel.png" alt="Papel" onClick={() => playGame(1)} />
      <img src="/images/tesoura.png" alt="Tesoura" onClick={() => playGame(2)} />
    </div>
  );
};

export default Game;