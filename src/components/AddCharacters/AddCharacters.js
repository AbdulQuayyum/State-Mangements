import React, { useState, useContext } from 'react'
import { CharacterContext } from "../CharacterContext/CharacterContext";

const AddCharacters = () => {
    const [name, setName] = useState('')
    const [rank, setRank] = useState('')
    const [character, setCharacter] = useContext(CharacterContext)

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateRank = (e) => {
        setRank(e.target.value)
    }
    const addCharacter = (e) => {
        e.preventDefault()
        setCharacter(prevCharacters => [...prevCharacters, { name: name, rank: rank }])
    }

    return (
        <form onSubmit={addCharacter}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="rank" value={rank} onChange={updateRank} />
            <button>Submit</button>
        </form>
    )
}

export default AddCharacters
