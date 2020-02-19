import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import {Search} from './components/search/search.component'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }


  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ monsters: users }))

  }

  handleChange = e => this.setState({ searchField: e.target.value })

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase() ) )
    
    return (
      <div className="App">

        <h1>Monsters Rolodex</h1>
        <Search placeholder="Find Monster" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />

      </div>
    )
  }
}

export default App;
