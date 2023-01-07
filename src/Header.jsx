import React from "react";
import ccLogo from "./assets/cc-logo.png";
import githubIcon from "./assets/github-icon.png";

function Header() {
  return (
    <header>
      <div className="logo-contnr">
        <img className="cc-logo" src={ccLogo} alt="logo" />
        <div className="app-title">
          <p id="cc-title">CODECHEF</p>
          <h2 id="archive-title">Archive</h2>
        </div>
      </div>
      <div className="links-contnr">
        <img className="github-icon" src={githubIcon} alt="github" />
        <a
          href="https://github.com/Abhijeet-Gautam5702/codechef-archive"
          target="_blank"
        >
          Source code
        </a>

      </div>
    </header>
  );
}

export default Header;
