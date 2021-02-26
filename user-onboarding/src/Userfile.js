import React from 'react'

function User({inputData}) {
    if(!inputData) {
        return <h2>doing the thing hang on</h2>
    }

return (
    <div className='user part'>
        <h3>{inputData.username}</h3>
        <h3>{inputData.email}</h3>
        <h3>{inputData.password}</h3>
        <h3>{inputData.termsOfService}</h3>

    </div>
)
}

export default User