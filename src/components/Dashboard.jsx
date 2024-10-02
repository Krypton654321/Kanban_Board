import React from "react";
import "../componentCSS/Dashboard.css";
import Status from "./Status";
import User from "./User";
import Priority from "./Priority";

const Dashboard = ({ val, ordering }) => {
  return (
    <div className="mains">
      {val === "Status" ? <Status ordering={ordering} /> : null}
      {val === "User" ? <User ordering={ordering} /> : null}
      {val === "Priority" ? <Priority ordering={ordering} /> : null}
    </div>
  );
};

export default Dashboard;
