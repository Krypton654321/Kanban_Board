import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  const [selectedGrouping, setSelectedGrouping] = useState(() => {
    return localStorage.getItem('selectedGrouping') || "Status";
  });

  const [selectedOrdering, setSelectedOrdering] = useState(() => {
    return localStorage.getItem('selectedOrdering') || "Title";
  });

  useEffect(() => {
    localStorage.setItem('selectedGrouping', selectedGrouping);
  }, [selectedGrouping]);

  useEffect(() => {
    localStorage.setItem('selectedOrdering', selectedOrdering);
  }, [selectedOrdering]);

  const changingGroup = (val) => {
    setSelectedGrouping(val);
    console.log(val);
  };

  const changingOrder = (val) => {
    setSelectedOrdering(val);
    console.log(val);
  };

  return (
    <>
      {/* Pass selectedGrouping and selectedOrdering as props to Navbar */}
      <Navbar 
        changingGroup={changingGroup} 
        changingOrder={changingOrder} 
        selectedGrouping={selectedGrouping} 
        selectedOrdering={selectedOrdering} 
      />
      <Dashboard val={selectedGrouping} ordering={selectedOrdering} />
    </>
  );
};

export default App;
