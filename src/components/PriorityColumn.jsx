import React from "react";
import Card from "./Card";
import plus from "../assets/add.svg"; // Add your icons
import dots from "../assets/3 dot menu.svg"; // More options icon

const PriorityColumn = ({srcc, priorityTitle, tickets }) => {
  return (
    <div className="column"> {/* Use consistent column class */}
    
      <div className="cont"> {/* Wrap heading like in Status */}
        
        <h4>
        <img src={srcc} alt="" />
          {priorityTitle} <span className="status-number">{tickets.length}</span>
        </h4>
        <div className="forimg">
          <img className='pluss' src={plus} alt="Add new item" />
          <img className='pluss' src={dots} alt="More options" />
        </div>
      </div>
      {tickets.map((ticket) => (
        <Card key={ticket.id} id={ticket.id} title={ticket.title} tag={ticket.tag} status={ticket.status}/>
      ))}
    </div>
  );
};

export default PriorityColumn;
