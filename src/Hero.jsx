import React from "react";

export const saveBtn = document.querySelector(".save-btn");

function Hero(props) {
  //utility function : generate newItem object
  function saveUtil(e) {
    const hero = e.currentTarget.parentElement.parentElement;

    //get link to current tab, create new object and call handleSave()
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabURL = tabs[0].url;
      /* 
      TEST: if any website other than CODECHEF is opened, alert the user

      if(website url doesn't contain codechef => alert ) :: 
          tabURL.includes('codechef')
      if(website is codechef but problem page is not opened => alert) ::
          tabURL.includes('/problems/')
      */
      if (!tabURL.includes("codechef")) {
        window.alert("You are not on Codechef website");
      } else if (!tabURL.includes("/problems/")) {
        window.alert("Please open a specific problem to save it");
      } else {
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

        if (prblmTitleInput.value.length) {
          prblmTitle = prblmTitleInput.value;
        }

        const newItem = {
          id: Math.random(),
          title: prblmTitle,
          link: tabURL,
        };
        props.handleSave(newItem);

        prblmTitleInput.value = "";
      }
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
            placeholder="Hit SAVE and Problem Code will be assigned as title"
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
