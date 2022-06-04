import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }
  // Return JSX button.
  /* Can only attach event listeners to DOM elements
     but not on React components. */
  // Add prop onClick event listener and pass callback function.
  // Passing function reference tickle as prop value.
  return <button onClick={tickle}>Tickle me!</button>;

  // Inline event handler using arrow function to 
  // pass to event listener.
  // return <button onClick={() => console.log("Teeeheeee!!!")}>Tickle Me!</button>
}

export default Tickler;
