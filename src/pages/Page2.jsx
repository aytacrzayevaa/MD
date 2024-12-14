import React, { useState } from "react";
import "./Page2.scss";
import BirthDateCapture from "../components/BirthDateCapture";
import { Link } from "react-router-dom";

const Page2 = () => {
  const [selectedBuildings, setSelectedBuildings] = useState([]); 
  const [selectedRooms, setSelectedRooms] = useState([]); 

  const toggleBuildingType = (type) => {
    setSelectedBuildings((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type] 
    );
  };

  const getFloorOptions = () => {
    if (selectedBuildings.length === 0) return []; 
    const maxFloor = Math.max(...selectedBuildings); 
    return Array.from({ length: maxFloor }, (_, i) => i + 1);
  };

  const toggleRoomCount = (count) => {
    setSelectedRooms((prev) =>
      prev.includes(count)
        ? prev.filter((item) => item !== count) 
        : [...prev, count] 
    );
  };

  return (
    <div className="page-container">
      <div className="steps">
        <span className="step active">Seçimlər</span>
        <span className="step active">Axtarış</span>
        <span className="step">Mənzil</span>
        <span className="step">Ərizə</span>
      </div>
      <BirthDateCapture />

      <div className="content">
        <div className="building-type">
          <span className="label">Bina tipi</span>
          <button
            className={`type ${
              selectedBuildings.includes(9) ? "active" : ""
            }`}
            onClick={() => toggleBuildingType(9)}
          >
            9 mərtəbəli
          </button>
          <button
            className={`type ${
              selectedBuildings.includes(12) ? "active" : ""
            }`}
            onClick={() => toggleBuildingType(12)}
          >
            12 mərtəbəli
          </button>
        </div>

        <div className="floor-selection">
          <span className="label">Mərtəbə seçimi</span>
          <div className="dropdowns">
            <select>
              {getFloorOptions().map((floor) => (
                <option key={floor} value={floor}>
                  {floor}
                </option>
              ))}
            </select>
            <span>-</span>
            <select>
              {getFloorOptions().map((floor) => (
                <option key={floor} value={floor}>
                  {floor}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="room-count">
          <span className="label">Otaq sayı</span>
          {[1, 2, 3, 4].map((count) => (
            <button
              key={count}
              className={`room ${selectedRooms.includes(count) ? "active" : ""}`}
              onClick={() => toggleRoomCount(count)}
            >
              {count} otaqlı
            </button>
          ))}
        </div>

        <div className="actions">
          <button className="search">Axtar</button>
          <Link to='/'>
          <button
            className="reset"
            onClick={() => {
              setSelectedBuildings([]);
              setSelectedRooms([]);
            }}
          >
            Geriyə
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page2;
