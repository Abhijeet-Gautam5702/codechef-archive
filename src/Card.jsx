import React from "react";
import editIcon from "./assets/edit-icon.png";
import dltIcon from "./assets/trash-icon.png";
import { editCard, deleteCard } from "./logic";

function Card(props) {
  return (
    <div className="prblm-card" id={props.id} >
      <a href={props.link} target="_blank">
        <h4 className="prblm-title">{props.title}</h4>
      </a>
      <div className="ctrl-section">
        <div className="edit-contnr" onClick={editCard}>
          <img className="edit-btn ctrl-icon" src={editIcon} alt="edit" />
        </div>
        <div className="dlt-contnr" onClick={deleteCard}>
          <img className="dlt-btn ctrl-icon" src={dltIcon} alt="delete" />
        </div>
      </div>
    </div>
  );
}

export default Card;
