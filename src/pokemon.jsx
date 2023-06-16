import React from 'react'
const style = {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    textcolor: 'white'
}
const newstyle = {
    border: 20,
    borderRadius: 15,
    backgroundColor: 'skyblue',
    justifyContent: 'space-between',
    marginTop: 30,
    color: 'white'
}

function Pokemon({ pokemon }) {
    return (
        <div style={style}>
            {pokemon.map((pokemonXter) => {
                return (
                    <div style={newstyle} key={pokemonXter.id}>
                        <h1>{pokemonXter.name}</h1>
                        <img src={pokemonXter.sprites.front_default} alt="" />
                    </div>
                );
            })};
        </div>
    )
}

export default Pokemon
