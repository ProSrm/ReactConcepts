import React,{ useState } from 'react'

const ConditionalRendering = () => {
    const [isSunny,setIsSunny]=useState(true);
  return (
    <div>
        <h3>{isSunny?<div>Hey it is sunny day let's have an Icecreame</div>:<div>It is cold here so let's have hot cofee :)</div>}</h3>
    </div>
  )
}

export default ConditionalRendering

/*
use case e.g.: if user is logged in then show logout button if not logged in then show the login button . 
other common usecase:
1> Error Handling.(show error when it fails api call)
2> Loading state.(when data is loading show spinner)
3> Permissions: show different common pages based on user roles (hide/show pages)
*/