import React from "react";
import { saveData, clearData } from "./logic";

export const saveBtn = document.querySelector(".save-btn");

function Hero() {
  return (
    <div className="hero">
      <div className="input-contnr">
        <label htmlFor="prblm-title-input">
          <input
            type="text"
            name="prblm-title-input"
            id="prblm-title-input"
            placeholder="Give a suitable problem title (preferably PROBLEM CODE)"
          />
        </label>
      </div>
      <div className="btn-contnr">
        <button className="save-btn btn" onClick={saveData}>
          SAVE TAB
        </button>
        <button className="reset-btn btn" onClick={clearData}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default Hero;
