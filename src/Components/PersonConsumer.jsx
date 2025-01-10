import React, { useContext } from 'react'
import { AmazonParcelContext } from './UseContextExample';

const PersonConsumer = () => {
    const {pizza}=useContext(AmazonParcelContext);
  return (
    <div>sam loves {pizza} pizza !</div>
  )
}

export default PersonConsumer