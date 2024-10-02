import React, { useEffect, useState } from "react";
import PriorityColumn from "./PriorityColumn";
import "../componentCSS/Priority.css";
import nopriority from "../assets/No-priority.svg";
import urgent from "../assets/urgent.svg";
import high from "../assets/High Priority.svg";
import medium from "../assets/Medium Priority.svg";
import low from "../assets/Low Priority.svg";

const Priority = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Simulate fetching data from API
    const fetchData = async () => {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      ); // Replace with your actual API URL
      const data = await response.json();
      setTickets(data.tickets);
    };
    fetchData();
  }, []);

  // Filter tickets by priority and sort them by title
  const ticketsByPriority = (priority) => {
    return tickets
      .filter((ticket) => ticket.priority === priority)
      .sort((a, b) => a.title.localeCompare(b.title));
  };

  return (
    <div className="kanban-board"> {/* Use consistent layout class */}
      <PriorityColumn
        srcc={nopriority}
        priorityTitle="No Priority"
        tickets={ticketsByPriority(0)}
      />
      <PriorityColumn
        srcc={urgent}
        priorityTitle="Urgent"
        tickets={ticketsByPriority(1)}
      />
      <PriorityColumn
        srcc={high}
        priorityTitle="High"
        tickets={ticketsByPriority(2)}
      />
      <PriorityColumn
        srcc={medium}
        priorityTitle="Medium"
        tickets={ticketsByPriority(3)}
      />
      <PriorityColumn
        srcc={low}
        priorityTitle="Low"
        tickets={ticketsByPriority(4)}
      />
    </div>
  );
};

export default Priority;
