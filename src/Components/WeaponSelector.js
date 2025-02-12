import React from "react";

const WeaponSelector = ({ selectWeapon }) => (
  <div>
    <button className="weaponBtn" onClick={() => selectWeapon("rock")}>
      Rock
    </button>
    <button className="weaponBtn" onClick={() => selectWeapon("paper")}>
      Paper
    </button>
    <button className="weaponBtn" onClick={() => selectWeapon("scissors")}>
      Scissors
    </button>
  </div>
);

export default WeaponSelector;

