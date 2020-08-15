import React, { Component } from 'react'
import CharacterComponent from '.'

class CharacterList extends Component {
    render() {
        const { characters } = this.props
        return (
            <div>
                {
                    characters.map(character =>{
                        return(
                            <CharacterComponent key={character.char_id} name={character.name} img={character.img} occupation={character.occupation.join(', ')} nickName={character.nickname} appearance={character.appearance.join(', ')} status={character.status} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CharacterList