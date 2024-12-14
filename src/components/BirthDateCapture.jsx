import React, { useState } from "react";
import "./BirthDateCapture.scss";

const BirthDateCapture = () => {
  const [input, setInput] = useState("");

  const handleInput = (digit) => {
    if (input.length < 8) {
      setInput((prev) => prev + digit);
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  const formatInput = () => {
    const day = input.slice(0, 2);
    const month = input.slice(2, 4);
    const year = input.slice(4);
    return `${day.padEnd(2, "_")}/${month.padEnd(2, "_")}/${year.padEnd(4, "_")}`;
  };

  return (
    <div className="birthdate-capture">
      <p>Doğum tarixinizi aşağıdakı düymələr vasitəsilə daxil edin:</p>
   
      <div className="keypad">
        {["6", "2", "4", "1", "3", "9", "7", "5", "8", "0"].map((digit) => (
          <button
            key={digit}
            className="digit-button"
            onClick={() => handleInput(digit)}
          >
            {digit}
          </button>
        ))}
        <button className="clear-button" onClick={handleClear}>
          X
        </button>
        <button className="backspace-button" onClick={handleBackspace}>
          ←
        </button>
      </div>
      <div className="date-display">{formatInput()}</div>
    </div>
  );
};

export default BirthDateCapture;
