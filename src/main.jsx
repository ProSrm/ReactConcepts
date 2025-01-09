import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FunctionalComponent } from './Components/FunctionalComponent'
import { UseStateExample } from './Components/UseStateExample.jsx'
import UseEffectExample from './Components/UseEffectExample.jsx'
import EventHandler from './Components/EventHandler.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <FunctionalComponent functionName={"Mars"}/> */}
    {/* <UseStateExample/> */}
    {/* <UseEffectExample/> */}
    <EventHandler/>
  </>,
)

