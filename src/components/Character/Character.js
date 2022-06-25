import React from 'react'

const Character = ({ name, rank }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{rank}</p>
        </div>
    )
}

export default Character