import React, { useState, useEffect } from "react";
import "../componentCSS/User.css";
import Card from "./Card";
import plus from "../assets/add.svg"; // Add your icons
import dots from "../assets/3 dot menu.svg";

const User = ({ ordering }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching data from API
    const fetchData = async () => {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      ); // Replace with your actual API URL
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    fetchData();
  }, []);

  const getUserTickets = (userId) => {
    const userTickets = tickets.filter((ticket) => ticket.userId === userId);

    if (ordering === "Title") {
      return userTickets.sort((a, b) => a.title.localeCompare(b.title));
    } else if (ordering === "Priority") {
      const priorityOrder = [4, 3, 2, 1, 0];
      return userTickets.sort(
        (a, b) =>
          priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
      );
    }

    return userTickets;
  };

  return (
    <div className="kanban-board">
      {users.map((user) => (
        <div key={user.id} className="column">
          <div className="cont">
            <h4>
              {user.name}{" "}
              <span className="status-number">
                {getUserTickets(user.id).length}
              </span>
            </h4>
            <div className="forimg">
              <img className='pluss' src={plus} alt="Add new item" />
              <img className='pluss' src={dots} alt="More options" />
            </div>
          </div>

          {/* Map over user's tickets */}
          {getUserTickets(user.id).map((ticket) => (
            <Card
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              tag={ticket.tag}
              priority={ticket.priority}
              status={ticket.status}
              
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default User;
