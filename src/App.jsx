import { Component } from "react"
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Yihua',
      company: 'ZTM'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi { this.state.name }</p>
          <p>I work at {this.state.company}</p>
        </header>
        <button type="button" onClick={() => this.setState({ name: 'Andrei'})}>Change Name</button>
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}

export default App
