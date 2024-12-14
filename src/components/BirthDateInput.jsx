import React, { useState } from "react";
import "./BirthDateInput.scss";

const BirthDateInput = () => {
  const [day, setDay] = useState("18");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleMonthSelect = (selectedMonth) => {
    setMonth(selectedMonth);
  };

  const handleYearInput = (digit) => {
    if (year.length < 4) {
      setYear((prev) => prev + digit);
    }
  };

  const handleBackspace = () => {
    setYear((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setYear("");
  };

  return (
    <div className="birthdate-input">
      <div className="date-display">
      <p>Doğum tarixinizi sağdakı düymələr vasitəsilə tamamlayın:</p>
      <br />
        <span>{day}</span>/<span>{month || "-"}</span>/<span>{year || "-"}</span>
      </div>
      <div className="month-selector">
        <p>Ayı seçin:</p>
        <div className="months">
          {["Yan.", "Fev.", "Mar.", "Apr.", "May", "İyun", "İyul", "Avq.", "Sen.", "Okt.", "Noy.", "Dek."].map(
            (m, index) => (
              <button
                key={index}
                className={`month-button ${month === m ? "selected" : ""}`}
                onClick={() => handleMonthSelect(m)}
              >
                {m}
              </button>
            )
          )}
        </div>
      </div>
      <div className="year-input">
        <p>İli daxil edin:</p>
        <div className="keypad">
          {["4", "2", "5", "8", "1", "7", "9", "6", "0", "3"].map((digit) => (
            <button
              key={digit}
              className="digit-button"
              onClick={() => handleYearInput(digit)}
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
      </div>
    </div>
  );
};

export default BirthDateInput;
