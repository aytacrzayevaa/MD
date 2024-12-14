import React, { useState } from "react";
import "./Page2.scss";
import BirthDateCapture from "../components/BirthDateCapture";
import { Link } from "react-router-dom";

const Page2 = () => {
  const [selectedBuildings, setSelectedBuildings] = useState([]); // Seçilmiş bina növləri
  const [selectedRooms, setSelectedRooms] = useState([]); // Seçilmiş otaq sayı

  // Bina tipini dəyişdirən funksiya
  const toggleBuildingType = (type) => {
    setSelectedBuildings((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type) // Seçilmişdirsə, çıxar
        : [...prev, type] // Seçilmiş deyilsə, əlavə et
    );
  };

  // Mərtəbə seçimlərini qaytaran funksiya
  const getFloorOptions = () => {
    if (selectedBuildings.length === 0) return []; // Heç bina seçilməyibsə, mərtəbə yoxdur
    const maxFloor = Math.max(...selectedBuildings); // Seçilmiş bina növlərinin maksimum mərtəbəsini tapırıq
    return Array.from({ length: maxFloor }, (_, i) => i + 1); // 1-dən `maxFloor`-a qədər mərtəbələri qaytarırıq
  };

  // Otaq sayını dəyişdirən funksiya
  const toggleRoomCount = (count) => {
    setSelectedRooms((prev) =>
      prev.includes(count)
        ? prev.filter((item) => item !== count) // Seçilmişdirsə, çıxar
        : [...prev, count] // Seçilmiş deyilsə, əlavə et
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
        {/* Bina Tipi */}
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

        {/* Mərtəbə Seçimi */}
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

        {/* Otaq Sayı */}
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

        {/* Əməliyyatlar */}
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
