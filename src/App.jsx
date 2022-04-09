import { useEffect, useState } from "react"
import './App.css'

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// note: entire function re-runs everytime state is updated
// but is triggered only when state changes
// every re-render will re-run the entire function
const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([]) // array of 2 values: [value, setValue]
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  // pass state or props in deps that will cause function
  // to re-run
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
      .catch(err => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  // anonymous functions re-initializes every mount
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  // this function re-runs everytime, memory leak
  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLocaleLowerCase().includes(searchField)
  // })

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <SearchBox
        className="search-box"
        placeholder="Search monsters..."
        onChangeHandler={onSearchChange} />

      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
