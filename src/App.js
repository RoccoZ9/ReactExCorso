import { useEffect, useState } from 'react';
import './App.css';
import CardList from './component/card-list/card-list.component.js';
import SearchBar from './component/search-bar/search-box.component.js';



const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonster] = useState(monsters);

  const getList = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users)
      });
  }
  useEffect(() => {
    getList();
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchField])


  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBar
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholders='search monsters' />
      <CardList monsters={filteredMonsters} />
    </div>
  )

}


export default App;
