import React, { Component } from "react";
import "./App.css";
import PointsMultiplier from "./components/PointsMultiplier/PointsMultiplier";
import PlayersList from "./components/PlayersList/PlayersList";
import AddPlayer from "./components/AddPlayer/AddPlayer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: "Kunegunda",
          score: 5
        },
        {
          name: "Antoś",
          score: 0
        }
      ],
      multiplier: 1
    };
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return {
            ...player,
            score: player.score + scoreChange * this.state.multiplier
          };
        }
        return player;
      })
    });
  };

  onMultiplierUpdate = multiplier => {
    this.setState({
      multiplier
    });
  };

  onPlayerRemove = playerIndex => {
    this.setState({
      players: this.state.players.filter(
        (player, index) => index !== playerIndex
      )
    });
  };

  onPlayerAdd = playerName => {
    const newPlayer = {
      name: playerName,
      score: 0
    };
    this.setState({
      players: [...this.state.players, newPlayer]
    });
  };

  render() {
    return (
      <div className="App">
        <PointsMultiplier
          onMultiplierUpdate={this.onMultiplierUpdate}
          multiplier={this.state.multiplier}
        />
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList
          multiplier={this.state.multiplier}
          players={this.state.players}
          onScoreUpdate={this.onScoreUpdate}
          onPlayerRemove={this.onPlayerRemove}
        />
      </div>
    );
  }
}

export default App;
