import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Minotauro", id: '123' },
        { name: "Hydra", id: "345" },
        { name: "Tifone", id: "567" },
        { name: "Cerbero", id: "890" }
      ]

    }
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <diV key={monster.id}>
              <h1>{monster.name}</h1>
            </diV>)
        })}
      </div >
    );
  }
}

export default App;
