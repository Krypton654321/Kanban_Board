import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../componentCSS/Status.css";
import plus from "../assets/add.svg";
import dots from "../assets/3 dot menu.svg";
import todo from "../assets/To-do.svg";
import inprogress from "../assets/in-progress.svg";
import done from "../assets/Done.svg";
import cancelled from "../assets/Cancelled.svg";
import backlog from "../assets/Backlog.svg";

const Status = ({ ordering }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    const fetchData = async () => {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      ); // Replace with your API endpoint
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    };

    fetchData();
  }, []);

  // Get user name by ID
  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown";
  };

  // Group tickets by status
  const statusGroups = tickets.reduce((groups, ticket) => {
    const { status } = ticket;
    if (!groups[status]) {
      groups[status] = [];
    }
    groups[status].push(ticket);
    return groups;
  }, {});

  // Sort tickets based on ordering
  const sortTickets = (tickets) => {
    if (ordering === "Title") {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    } else if (ordering === "Priority") {
      const priorityOrder = [4, 3, 2, 1, 0];
      return tickets.sort(
        (a, b) =>
          priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
      );
    }
    return tickets;
  };

  const renderColumn = (status, icon, label) => (
    <div className="column">
      <div className="cont">
        <h4>
          <img className='pluss' src={icon} alt={label} />
          {label}{" "}
          <span className="status-number">
            {statusGroups[status]?.length || 0}
          </span>
        </h4>
        <div className="forimg">
          <img className='pluss' src={plus} alt="Add new item" />
          <img className='pluss' src={dots} alt="More options" />
        </div>
      </div>
      {sortTickets(statusGroups[status] || []).map((ticket) => (
        <Card
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          tag={ticket.tag}
          priority={ticket.priority}
        />
      ))}
    </div>
  );

  return (
    <div className="kanban-board">
      {renderColumn("Backlog", backlog, "Backlog")}
      {renderColumn("Todo", todo, "Todo")}
      {renderColumn("In progress", inprogress, "In Progress")}
      {renderColumn("Done", done, "Done")}
      {renderColumn("Cancelled", cancelled, "Cancelled")}
    </div>
  );
};

export default Status;
