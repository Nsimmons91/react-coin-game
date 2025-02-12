
import React, { useState } from "react";
import Player from "./Player";
import ScoreBoard from "./ScoreBoard";
import WeaponSelector from "./WeaponSelector";

const weapons = ["rock", "paper", "scissors"];

const Game = () => {
  const [playerOne, setPlayerOne] = useState(weapons[0]);
  const [playerTwo, setPlayerTwo] = useState(weapons[0]);
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  const startGame = () => {
    let counter = 0;
    const gameInterval = setInterval(() => {
      counter++;
      setPlayerTwo(weapons[Math.floor(Math.random() * weapons.length)]);
      setWinner("");
      if (counter > 5) {
        clearInterval(gameInterval);
        const gameWinner = selectWinner();
        setWinner(gameWinner);
        updateScore(gameWinner);
      }
    }, 100);
  };

  const selectWinner = () => {
    if (playerOne === playerTwo) {
      return "Oops it's a Tie!";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };

  const updateScore = (gameWinner) => {
    if (gameWinner === "Player One Wins!") {
      setScore((prevScore) => ({ ...prevScore, wins: prevScore.wins + 1 }));
    } else if (gameWinner === "Player Two Wins!") {
      setScore((prevScore) => ({ ...prevScore, losses: prevScore.losses + 1 }));
    } else if (gameWinner === "Oops it's a Tie!") {
      setScore((prevScore) => ({ ...prevScore, ties: prevScore.ties + 1 }));
    }
  };

  const selectWeapon = (weapon) => {
    setPlayerOne(weapon);
    setWinner("");
  };

  return (
    <>
      <div>
        <Player weapon={playerOne} />
        <Player weapon={playerTwo} />
      </div>
      <WeaponSelector selectWeapon={selectWeapon} />
      <div className="winner">{winner}</div>
      <button type="button" onClick={startGame}>
        Start!
      </button>
      <ScoreBoard score={score} />
    </>
  );
};

export default Game;
