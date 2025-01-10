import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FunctionalComponent } from './Components/FunctionalComponent'
import { UseStateExample } from './Components/UseStateExample.jsx'
import UseEffectExample from './Components/UseEffectExample.jsx'
import EventHandler from './Components/EventHandler.jsx'
import ConditionalRendering from './Components/ConditionalRendering.jsx'
import { ListExample } from './Components/ListExample.jsx'
import Formdata from './Components/Formdata.jsx'
import PersonConsumer from './Components/PersonConsumer.jsx'
import { UseContextExample } from './Components/UseContextExample.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <FunctionalComponent functionName={"Mars"}/> */}
    {/* <UseStateExample/> */}
    {/* <UseEffectExample/> */}
    {/* <EventHandler/> */}
    {/* <ConditionalRendering/> */}
    {/* <ListExample/> */}
    {/* <Formdata/> */}
    {/* this is used to show example of the context  */}
    <UseContextExample>
      <PersonConsumer />
    </UseContextExample>
  </>,
)

