import React, { useState } from 'react'

export const UseStateExample = () => {
    const [refill , setRefill]=useState("");
    const [drink , setdrink]=useState("");

    function fillTheDrink(){
        setdrink("black coffee");
    }
  return (
    <div>
        <button onClick={()=>{setRefill(Math.random()*1000)}}>refil count</button>
        <button onClick={()=>{fillTheDrink()}}>Fill the Drink</button>
        <h1>{drink}</h1>
        <h2>{refill}</h2>
    </div>
  )
}

/*
real world example : Bank Account Balance Updating the account balance after each deposit or withdrawal.
Use: to store [ d a t a ] . 
Access : cannot access by other components directly can be accessed as props. 
state  : State and re-render
when component state changes then react ensure that ui is having latest values . 
so it re-render the component. 
*/