import React, { useState, useEffect, useRef } from "react";
import "../componentCSS/Navbar.css";
import fp from "../assets/Display.svg";
import drop from "../assets/down.svg";

const Navbar = ({ changingGroup, changingOrder, selectedGrouping, selectedOrdering }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);  // Create a ref for the dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleGroupingChange = (e) => {
    const newGrouping = e.target.value;
    changingGroup(newGrouping);  // Call the changing function with new value
  };

  const handleOrderingChange = (e) => {
    const newOrdering = e.target.value;
    changingOrder(newOrdering);  // Call the changing function with new value
  };

  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mainss">
      <div className="dropdown" ref={dropdownRef}>
        <div className="dropdown-button" onClick={toggleDropdown}>
          <span className="tuneicon">
            <img src={fp} alt="" />
          </span>
          Display
          <span className="dropicon">
            <img className="drop" src={drop} alt="" />
          </span>
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <label>
              <span className="dropdd">Grouping</span>
              <div className="subdrop">
                <select value={selectedGrouping} onChange={handleGroupingChange}>
                  <option>Status</option>
                  <option>User</option>
                  <option>Priority</option>
                </select>
              </div>
            </label>
            <label>
              <span className="dropdd">Ordering </span>
              <div className="subdrop">
                <select value={selectedOrdering} onChange={handleOrderingChange}>
                  <option>Title</option>
                  <option>Priority</option>
                </select>
              </div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
