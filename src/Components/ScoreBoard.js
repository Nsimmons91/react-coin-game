import React from "react";

const ScoreBoard = ({ score }) => (
  <div className="score-board">
    <div>Wins: {score.wins}</div>
    <div>Losses: {score.losses}</div>
    <div>Ties: {score.ties}</div>
  </div>
);

export default ScoreBoard;


