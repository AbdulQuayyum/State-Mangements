import React, { useState, createContext } from 'react'

export const CharacterContext = createContext()

export const CharacterProvider = props => {
    const [characters, setCharacters] = useState([
        {
            name: "One Above All",
            rank: "Strongest In MCU",
            id: 2234
        },
        {
            name: "The Living Tribunal",
            rank: "2nd Strongest In MCU",
            id: 2235
        },
        {
            name: "The Beyonder",
            rank: "3rd Strongest In MCU",
            id: 2236
        }
    ])
    return (
        <CharacterContext.Provider value={[characters, setCharacters]}>
            {props.children}
        </CharacterContext.Provider>
    )
}
