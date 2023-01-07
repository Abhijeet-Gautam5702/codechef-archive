import React from "react";

export const saveBtn = document.querySelector(".save-btn");

function Hero(props) {
  //utility function : generate newItem object
  function saveUtil(e) {
    const hero = e.currentTarget.parentElement.parentElement;

    //get link to current tab, create new object and call handleSave()
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabURL = tabs[0].url;
      //get the problem title
      const n = tabURL.length;
      let i = 0,
        prblmTitle = "";
      while (i < n) {
        if (
          (tabURL.charCodeAt(i) >= 65 && tabURL.charCodeAt(i) <= 90) ||
          (tabURL.charCodeAt(i) >= 48 && tabURL.charCodeAt(i) <= 57)
        ) {
          prblmTitle += tabURL[i];
        }
        i++;
      }

      const prblmTitleInput = hero.querySelector("#prblm-title-input");

      if(prblmTitleInput.value.length){
        prblmTitle=prblmTitleInput.value;
      }

      const newItem = {
        id: Math.random(),
        title: prblmTitle,
        link: tabURL,
      };
      props.handleSave(newItem);

      prblmTitleInput.value = "";
    });
  }

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
        <button className="save-btn btn" onClick={saveUtil}>
          SAVE TAB
        </button>
        <button className="reset-btn btn" onClick={props.handleClear}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default Hero;
