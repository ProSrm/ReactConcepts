import React, { createContext, useState } from 'react'


export const AmazonParcelContext = createContext();

export const UseContextExample = ({ children }) => {

    const [pizza, setPizza] = useState("Cheese");
    return (
        <AmazonParcelContext.Provider value={{pizza}}>
            {children}
        </AmazonParcelContext.Provider>
    )
}



/* 
use : to share data across the react components , without passing prop to parent then child and then subchild 
we can directly pass data to the subchild. 

1)Create context  (CreateContext())
2)Provide context (<Contex.provider>)
3)Consume context (useContext())

*/