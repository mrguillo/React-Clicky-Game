import React, { Component } from "react";
import Character from "./Character"

class Characters extends Component {
    render() {
        return this.props.characters.map(character => <Character character={character} key={character.id}/>)
    }
}

export default Characters;
