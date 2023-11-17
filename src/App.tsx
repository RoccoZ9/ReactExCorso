import { useEffect, useState, ChangeEvent } from 'react';
import './App.css';
import CardList from './component/card-list/card-list.component.tsx';
import SearchBar from './component/search-bar/search-box.component.tsx';
import React from 'react';
import { getData } from './util/data.util.ts';


const URL_LIST = 'https://jsonplaceholder.typicode.com/users';

export interface Monster {
  id: string;
  name: string;
  email: string;
}


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getData<Monster[]>(URL_LIST);
      setMonsters(users);
    };
    fetchUser()
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
        placeholder='search monsters' />
      <CardList monsters={filteredMonsters} />
    </div>
  )

}


export default App;
