import React, {Component} from 'react'
import GameView from './GameContainer/containers/GameView/GameView'
import './App.css'

class App extends Component {
  render() {
    return (<div className="App">
      <GameView />
    </div>);
  }
}

export default App;
