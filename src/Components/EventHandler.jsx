import React from 'react'

const EventHandler = () => {
    const handleClick = (event) => {
        console.log(`Lets Dance at position X: ${event.clientX}, Y: ${event.clientY}! 🕺💃`);
      };
    return (
        <button onClick={handleClick}>
          Click Me to Dance!
        </button>
      );
}

export default EventHandler

/*
real world example : any event hadle then news covers it similar way event is used in js to record or notify about the event. 
Use : when user change value in input box , click button 
then update state on event. 

*/