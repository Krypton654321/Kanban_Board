import React from "react";
import "../componentCSS/Card.css";
import grey from "../assets/grey.jpeg";
import nopriority from "../assets/No-priority.svg";
import urgent from "../assets/urgentt.svg";
import high from "../assets/High Priority.svg";
import medium from "../assets/Medium Priority.svg";
import low from "../assets/Low Priority.svg";
import backlog from "../assets/Backlog.svg";
import todo from "../assets/To-do.svg";
import inprogress from "../assets/in-progress.svg";

const Card = ({ id, title, tag, priority=-1, status }) => {
  return (
    <div className="card">
      <h5 className="idd">{id}</h5>
      <div className="maincont2">
        {status == "Backlog" ? <img className="prio" src={backlog} alt="" /> : null}
        {status == "Todo" ? <img className="prio" src={todo} alt="" /> : null}
        {status == "In progress" ? <img className="prio" src={inprogress} alt="" /> : null}
        <h5>{title}</h5>
      </div>
      <div className="featured">
        <div className="maincont">
          {priority!=-1 && <span className="tag-container">
          {priority == 4 ? <img className="prio" src={urgent} alt="" /> : null}
          {priority == 3 ? <img className="prio" src={high} alt="" /> : null}
          {priority == 2 ? <img className="prio" src={medium} alt="" /> : null}
          {priority == 1 ? <img className="prio" src={low} alt="" /> : null}
          {priority == 0 ? (
            <img className="prio" src={nopriority} alt="" />
          ) : null}
          </span>}
          <div className="tag-container">
            <img src={grey} alt="" />
            <p>{tag.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
