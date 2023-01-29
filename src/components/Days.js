import React, { useState } from 'react';
import "../styles/Days.css";
import { Button } from 'primereact/button';

export function Days() {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const [buttons, setButtons] = useState([false, false, false, false, false, false, false]);

  const handleClick = (index) => {
    const updatedButtons = [...buttons];
    updatedButtons[index] = !updatedButtons[index];
    setButtons(updatedButtons);
  }

  const handleReset = () => {
    setButtons(Array(buttons.length).fill(false));
  }

  return (
    <>
      <h5>Jours d'ouverture</h5>
      <div class="container">
        <div class="row">
          <div class="col">
            {buttons.map((isOn, index) => (
              <button key={index} className={`round-button ${isOn ? 'active' : ''}`} onClick={() => handleClick(index)}>
                {days[index]}
              </button>

            ))}
          </div>
        </div>
      </div>
      <div class="container reset">
        <div class="row">
          <div class="col">
            <Button label="Réinitaliser" className="p-button-text btn-reset" onClick={handleReset} />
          </div>
        </div>

      </div>
    </>
  );
}