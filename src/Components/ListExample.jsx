import React, { useState } from 'react'

export const ListExample = () => {

    const [fruits, setFruits] = useState([
        'Mango',
        'Guava',
        'Banana'
    ])

    return (
        <div>
            {fruits.map((fruit, index) => {
                return(
                <div key={index}>
                    <h1>{fruit}</h1>
                </div>
                )
            })}
        </div>
    )
}

/*
UseCase: Rendering multiple elements.
e.g. rendering products / displaying posts /search result.


*/
