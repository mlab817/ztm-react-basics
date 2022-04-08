import { Component } from "react"
import './App.css'

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// setState is async
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // best place to put api request
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      // convert response to json
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {
          monsters: users
        }
      }))
      .catch(err => {
        console.error(err)
      })
  }

  // anonymous functions re-initializes every mount
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    // make readable
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>

        <SearchBox className="search-box" placeholder="Search monsters..." onChangeHandler={onSearchChange} />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
