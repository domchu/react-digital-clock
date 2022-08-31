import React from "react";

const Clock = () => {
    return (
      
        let time = new Date().toLocaleTimeString();
    <div className="page__container">
      <div>
        <h1>Digital Clock</h1>
            <h2>{ time}</h2>
      </div>
    </div>
  );
};

export default Clock;
