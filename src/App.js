import React, { Component } from 'react'
import Pokemon from './pokemon';




class App extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    this.fetchdata();
  }



  async fetchdata() {
    let results = []
    for (let id = 1; id <= 80; id++) {
      let pokemonapi = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      let pokemonResult = await pokemonapi.json();
      results.push(pokemonResult)
    }
    this.setState({
      data: results
    });
  }

  render() {
    return (
      <div>
        <Pokemon pokemon={this.state.data} />
      </div>
    )
  }
}

export default App



