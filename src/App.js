import { Component } from 'react';
import './App.css';
import CardList from './component/card-list/card-list.component.js';
import SearchBar from './component/search-bar/search-box.component.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users }
        },
          () => { console.log(this.state) }
        )
      });
  };

  onSearchChange = (event) => {
    console.log({ startingArray: this.state.monsters });
    const searchField = event.target.value.toLowerCase();
    this.setState(() => { return { searchField } });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <SearchBar
          className='search-box'
          onChangeHandler={this.onSearchChange}
          placeholders='search monsters' />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
