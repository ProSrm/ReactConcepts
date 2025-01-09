import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [waterLevel,setWaterLevel]=useState();
    
    useEffect(()=>{
        if(waterLevel===0)
         console.log("call the watchman to fill the tank.")

    },[waterLevel])
  return (
    <div>
        <button onClick={()=>{setWaterLevel(100)}}>fill</button>
        <button onClick={()=>{setWaterLevel(0)}}>empty</button>
        <h5>water level is {waterLevel}</h5>
    </div>
  )
}

export default UseEffectExample

/*
real world example : Watchman who keep eye on events or instructed to act on specific conditions. 
use: side effects like fetching data, updating the DOM, or subscribing to external systems
Access : only inside particular component. 
state : renders when any particular state is updated in dependacny array or the useEffect . 
if not value in dependacy array then useEffect only work once. 
*/