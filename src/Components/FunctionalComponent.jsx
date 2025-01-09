import React from 'react'
import { createRoot } from 'react-dom/client'

export const FunctionalComponent = (props) => {
    const variable=5+10;
    console.log(variable);
    createRoot(document.getElementById('root')).render(<div>hi there </div>)
  return (
    <div>I am from {props.functionName} Component</div>
  )
}

