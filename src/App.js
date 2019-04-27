import React, { Component } from 'react';
import './App.css';

  const PlayerCard = ({color, symbol}) => {
    const style = {
      backgroundColour: color, 
      backgroundImage: "url(./img/" + symbol + ".jpg)"
    }
  
    return(
    <div style = {style} className="player-card">
      <h1>Player1</h1>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.symbols = ["rock", "paper", "scissors"]
    this.state = {}
  }

  runGame = () => {
    //Set states for P1 and P2's hand 
    this.setState({
      playerRed: this.symbols[Math.floor(Math.random() * 3)], 
      playerBlue: this.symbols[Math.floor(Math.random() * 3)]
    }) 
    console.log("Red " + this.state.playerRed + " Blue " + this.state.playerBlue)

  }

  render() {
    return (
      <div className="App">
        <PlayerCard
          color="red"
          symbol= {this.state.playerRed}/>
        <PlayerCard
          color="blue"
          symbol= {this.state.playerBlue}/>

        <button onClick={this.runGame}>Run Game</button>
      </div>
    );
  }

}

export default App;
