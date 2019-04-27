import React, { Component } from 'react';
import './App.css';
import { timingSafeEqual } from 'crypto';

  const PlayerCard = ({color, symbol}) => {
    const style = {
      backgroundColour: color, 
      backgroundImage: "url(./img/" + symbol + ".jpg)"
    }
  
    return(
    <div style = {style} className="player-card">
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.symbols = ["rock", "paper", "scissors"]
    this.state = {}
  }

  decideWinner = ()=> {
    const {playerBlue, playerRed} = this.state //gets state's Blue and Red state
    if(playerRed == playerBlue){
      return "Draw!"
    }
    //playerRed Wins!
    if((playerRed=="rock" && playerBlue=="scissors") || 
    (playerRed=="paper" && playerBlue=="rock") ||
    (playerRed=="scissors" && playerBlue=="paper")){
      return "Player Red Won!"
    }
    return "Blue Player wins!"

  }

  runGame = () => {
    //interval timer for drawing outcome every 1/10th second, run it 40 times
    let counter = 0
    let myInterval = setInterval(() => {
      counter++
      //Set states for P1 and P2's hand 
      this.setState({
        playerRed: this.symbols[Math.floor(Math.random() * 3)], 
        playerBlue: this.symbols[Math.floor(Math.random() * 3)], 
        winner: ""
      }) 
      //animation stops after 40 times 
      if(counter > 40){
        clearInterval(myInterval)
        this.setState({winner: this.decideWinner()})
      }
    },50)
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
        <h1>{this.state.winner}</h1>
        <button onClick={this.runGame}>Run Game</button>
      </div>
    );
  }

}

export default App;
