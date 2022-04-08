import { Component } from "react"
import logo from './logo.svg'
import './App.css'

// setState is async
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    console.log('constructor')
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

    console.log('componentDidMount')
  }

  // anonymous functions re-initializes every mount
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render')

    // make readable
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters..."
          onChange={onSearchChange}/>
        {
          filteredMonsters.map((monster) => (<h1 key={monster.id}>{ monster.name }</h1>))
        }
      </div>
    )
  }
}

export default App
