import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users }
        }, () => { console.log(this.state) }
        );
        console.log(users)
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <diV key={monster.id}>
              <h1>{monster.name}</h1>
            </diV>
          )
        })}
      </div>
    );
  }
}

export default App;
