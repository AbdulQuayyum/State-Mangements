import React, { useContext } from 'react'
import { CharacterContext } from '../CharacterContext/CharacterContext'

const Navbar = () => {
    const [characters, setCharacters] = useContext(CharacterContext)
    return (
        <nav>
            <h3>Abdul-Quayyum</h3>
            <p>List of Characters: {characters.length}</p>
        </nav>
    )
}

export default Navbar 