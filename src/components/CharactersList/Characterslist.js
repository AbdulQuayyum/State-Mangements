import React, { useState, useContext } from "react";
import Character from "../Character/Character";
import { CharacterContext } from "../CharacterContext/CharacterContext";

const CharacterList = () => {
    const { characters, setCharacters } = useContext(CharacterContext)

    return (
        <div>
            {characters.map(character => (
                <Character name={character.name} rank={character.rank} key={character.id} />)
            )}
        </div>
    )
}

export default CharacterList;