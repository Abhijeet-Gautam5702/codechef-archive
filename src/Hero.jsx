import React from "react";

function Hero() {
  return (
    // <h1>hello, world!</h1>
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
        <button className="save-btn btn">SAVE TAB</button>
        <button className="reset-btn btn">RESET</button>
      </div>
    </div>
  );
}

export default Hero;
