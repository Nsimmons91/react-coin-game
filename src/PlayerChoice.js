import React from "react";
import scissors from "./scissors.png";
import paper from "./paper.png";
import rock from "./rock.jpg";

const PlayerChoice = ({ onChoice }) => {
  const choices = [
   { name: "rock", image: rock.jpg},
   { name: "paper", image: paper.png},
   { name: "scissors", image: scissors.png}
  ];
  return (
    <div className="player-choice">
      {choices.map((choice) => (
        <button
        key={choices.name}
        onClick={() => onChoice(choice.name)}
        >
          <img src={choices.imaage} alt={choice.name} style={{widdth: "50px", height: "50px"}}/>
          <span>{choices.name.charAt(0).toUpperCase() + choice.name.slice(1)}</span>
        </button>
     ))}
    </div>
  );
};

 export default PlayerChoice;
  
