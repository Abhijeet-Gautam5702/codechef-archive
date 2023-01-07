import React from "react";
import dltIcon from "./assets/trash-icon.png";

function Card(props) {
  const problem = props.item;

  return (
    <div className="prblm-card" id={problem.id}>
      <a href={problem.link} target="_blank">
        <h4 className="prblm-title">{problem.title}</h4>
      </a>
      <div className="ctrl-section">
        <div className="dlt-contnr" onClick={props.handleDelete}>
          <img className="dlt-btn ctrl-icon" src={dltIcon} alt="delete" />
        </div>
      </div>
    </div>
  );
}

export default Card;
