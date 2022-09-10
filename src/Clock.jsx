import React, { useEffect, useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  //updating the state every time
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  //the useEffect is the same as the setTimeout function
  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  return (
    <div className="page__container">
      <div>
        <h1>Digital Clock</h1>
        <h2>{currentTime}</h2>
        {/* <span className="am__pm">AM</span> */}
      </div>
    </div>
  );
};

export default Clock;
