import React, { useState } from "react";

function App() {
  const [time, timeNow] = useState(new Date().toLocaleTimeString());

  // function getTime() {
  //   timeNow(new Date().toLocaleTimeString());
  // }

  function updateTime() {
    timeNow(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={getTime}>Get Time</button> */}
    </div>
  );
}

export default App;
