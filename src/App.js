import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
   super();

   this.state = {
     name : 'Rocco'
   }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello my name is {this.state.name}. Ciao Fabio!
          </p>
          <button> Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
