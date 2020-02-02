import React, { Component } from "react";


class Character extends Component {
    render() {
        const {character} = this.props;
        return  <div>
                    {character.title} - 
                    {character.image} -
                    {character.clicked} - 
                    {character.id}
                    <input type="checkbox" />
                    <button>
                        x
                    </button>
                </div>
    }
}

export default Character;