import React from 'react';

const PlayAgain = ({ resetGame, setGameOver }) => {
  return (
    <div className="play-again">
      <button onClick={resetGame}>Jogar Novamente</button>
      <button onClick={() => setGameOver(true)}>Encerrar Jogo</button>
    </div>
  );
};

export default PlayAgain;