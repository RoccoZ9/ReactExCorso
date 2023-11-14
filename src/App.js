import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: { firstName: 'Rocco', lastName: 'Zagà' },
      company: 'Vidyasot'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello i'm {this.state.name.firstName} {this.state.name.lastName}. I work in {this.state.company}
          </p>
          <p>Ciao Fabio!</p>
          <button onClick={() => {
            this.setState(() => {
              return {
                name: { firstName: 'CarloVitto', lastName: 'VittoCarlo' }
              };
            }, () => {
              console.log(this.state)
            });
          }}> Change name</button>
          <button onClick={() => { this.setState({ company: 'FinconsCarlo' }) }}>Change company </button>
        </header>
      </div >
    );
  }
}

export default App;
