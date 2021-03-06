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
    this.state = {
      humanScore : 0, 
      botScore : 0
    }
  }

  decideWinner = ()=> {
    const {botPlayer, humanPlayer} = this.state //gets state's Blue and Red state
    if(humanPlayer == botPlayer){
      return "Draw!"
    }
    //humanPlayer Wins!
    if((humanPlayer=="rock" && botPlayer=="scissors") || 
    (humanPlayer=="paper" && botPlayer=="rock") ||
    (humanPlayer=="scissors" && botPlayer=="paper")){
      this.setState({
        humanScore: this.state.humanScore + 1
      })
      return "You Human Won!"
    }
    this.setState({
      botScore: this.state.botScore + 1
    })
    return "Computer Rules the world!"

  }

  runGame = (el) => {
    let humanCard = el.target.value

    //interval timer for drawing outcome every 1/10th second, run it 40 times
    let counter = 0
    let myInterval = setInterval(() => {
      counter++
      //Set states for P1 and P2's hand 
      this.setState({
        humanPlayer: humanCard, 
        botPlayer: this.symbols[Math.floor(Math.random() * 3)], 
        winner: ""
      }) 
      //animation stops after 40 times 
      if(counter > 40){
        clearInterval(myInterval)
        this.setState({winner: this.decideWinner()})
      }
    },50)
  }

  restartGame = ()=> {
    this.setState({
      humanScore: 0,
      botScore: 0
    })
  }

  render() {
    return (
      <div className="App">
        <PlayerCard
          color="red"
          symbol= {this.state.humanPlayer}/>
        <PlayerCard
          color="blue"
          symbol= {this.state.botPlayer}/>
        <h1>{this.state.winner}</h1>

        <button onClick={this.runGame} value="paper">Paper</button>
        <button onClick={this.runGame} value="scissors">Scissors</button>
        <button onClick={this.runGame} value="rock">Rock</button>
        <h1>My Score {this.state.humanScore}</h1>
        <h1>Bot Score {this.state.botScore}</h1>
        <button onClick={this.restartGame}>Restart</button>

      </div>
    );
  }

}

export default App;
