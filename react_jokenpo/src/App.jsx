import React, { useState } from 'react';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';
import Result from './components/Result';
import PlayAgain from './components/JogarNovamente';
import './App.css';

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draws, setDraws] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState('');

  const choices = ['pedra', 'papel', 'tesoura'];

  const playGame = (playerChoice) => {
    const computerChoice = Math.floor(Math.random() * 3);
    let outcome = '';

    if (playerChoice === computerChoice) {
      setDraws(draws + 1);
      outcome = 'Empate!';
    } else if (
      (playerChoice === 0 && computerChoice === 2) ||
      (playerChoice === 1 && computerChoice === 0) ||
      (playerChoice === 2 && computerChoice === 1)
    ) {
      setPlayerScore(playerScore + 1);
      outcome = 'Você venceu!';
    } else {
      setComputerScore(computerScore + 1);
      outcome = 'Computador venceu!';
    }

    setResult(`Você escolheu ${choices[playerChoice]}, Computador escolheu ${choices[computerChoice]}. ${outcome}`);
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setDraws(0);
    setResult('');
    setGameOver(false);
  };

  return (
    <div>
      <h1>Pedra, Papel, Tesoura</h1>
      <Scoreboard playerScore={playerScore} computerScore={computerScore} draws={draws} />
      {!gameOver && <Game playGame={playGame} />}
      {result && <Result result={result} />}
      <PlayAgain resetGame={resetGame} setGameOver={setGameOver} />
    </div>
  );
};

export default App;