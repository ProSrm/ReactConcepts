import React, { useState } from 'react'

const Formdata = () => {
    const [userName, setUserName] = useState("")
    const [age, setUserAge] = useState(0)
    const [userEmail, setUserEmail] = useState("")

    const userDetails = {
        userName,
        age,
        userEmail
    }

    const handleFormSubmit = (e) => { e.preventDefault() }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="Name"></label>
                <input type="text" placeholder='Enter your name '
                    value={userName}
                    onChange={(e) => { setUserName(e.target.value) }} />
                <label htmlFor="age"></label>
                <input type="number" placeholder='Enter your age '
                    value={age}
                    onChange={(e) => { setUserAge(e.target.value) }} />
                <label htmlFor="email"></label>
                <input type="email" placeholder='Enter your email '
                    value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
                <button type='submit'>Register</button>
            </form>
            <h3>Here is the User Information </h3>
            <h5>{userName}</h5>
            <h5>{age}</h5>
            <h5>{userEmail}</h5>
        </div>
    )
}

export default Formdata