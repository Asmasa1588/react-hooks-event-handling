import React from "react";

function Tickler() {
  return <button onClick={() => console.log("Teehee!")}></button>;
  function tickle(event) {
    console.log(event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
