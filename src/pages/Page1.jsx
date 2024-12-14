import React, { useState } from "react";
import "./Page1.scss";
import { Link } from "react-router-dom";
import BirthDateInput from "../components/BirthDateInput";

const Page1 = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedSelectionMethod, setSelectedSelectionMethod] = useState("");

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
  };

  const handleSelectionMethodClick = (method) => {
    setSelectedSelectionMethod(method);
  };

  return (
    <div className="page-container">
      <BirthDateInput />

      <div className="content">
        <div className="payment-method">
          <label>Ödəniş üsulu</label>
          <div className="aa">
            <button
              className={`method ${
                selectedMethod === "öz-vəsait" ? "selected" : ""
              }`}
              onClick={() => handleMethodClick("öz-vəsait")}
            >
              Öz vəsaiti hesabına
            </button>
            <button
              className={`method ${
                selectedMethod === "ipoteka" ? "selected" : ""
              }`}
              onClick={() => handleMethodClick("ipoteka")}
            >
              İpoteka krediti hesabına
            </button>
          </div>
        </div>

        <div className="info-box">
          <i className="icon">i</i>
          <span>
            İpoteka krediti Azərbaycan Respublikası İpoteka və Kredit Zəmanət
            Fondunun güzəştli ipoteka krediti (3 ildən 30 ilədək müddətində, 4%
            illik)
          </span>
        </div>

        <div className="selection-method">
          <span className="label">
            Mənzil seçimi
            <span className="label"> üsulu</span>
          </span>
          <div className="buttons">
            <button
              className={`method ${
                selectedSelectionMethod === "xəritə" ? "selected" : ""
              }`}
              onClick={() => handleSelectionMethodClick("xəritə")}
            >
              Xəritə üzərində
            </button>
            <button
              className={`method ${
                selectedSelectionMethod === "parametrlər" ? "selected" : ""
              }`}
              onClick={() => handleSelectionMethodClick("parametrlər")}
            >
              Parametrlər üzrə
            </button>
            <button
              className={`method ${
                selectedSelectionMethod === "ünvan" ? "selected" : ""
              }`}
              onClick={() => handleSelectionMethodClick("ünvan")}
            >
              Ünvan üzrə
            </button>
          </div>
        </div>

        <div className="project-dropdown">
          <label htmlFor="project">Layihə</label>
          <select id="project" className="dropdown">
            <option value="">Layihəni seçin</option>
            <option value="yasamal">Yasamal Yaşayış Kompleksi</option>
            <option value="yasamal">Hövsan Yaşayış Kompleksi</option>
            <option value="yasamal">Yasamal Yaşayış Kompleksi</option>
            <option value="yasamal">Yasamal Yaşayış Kompleksi</option>
            <option value="yasamal">Yasamal Yaşayış Kompleksi</option>
            <option value="yasamal">Yasamal Yaşayış Kompleksi</option>
          </select>
        </div>
      </div>
      <br />
      <div className="actions">
        <Link>
          {" "}
          <button className="prev">Əvvəlki</button>
        </Link>
        <Link to="/page2">
          <button className="next">Növbəti</button>
        </Link>
      </div>
    </div>
  );
};

export default Page1;
