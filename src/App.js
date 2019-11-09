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
          id: 1,
          name: "Antoś",
          score: 5
        },
        {
          id: 2,
          name: "Kunegunda",
          score: 1
        }
      ],
      multiplier: 1
    };
  }

  onPlayerNameUpdate = (playerIndex, playerName) => {
    const updatePlayers = this.state.players.map((player, index) => {
      if (index === playerIndex) {
        const updatePlayer = {
          ...player,
          name: playerName
        };

        return updatePlayer;
      }
      return player;
    });
    const players = updatePlayers;
    this.setState({
      players: players
    });
  };

  onScoreUpdate = (playerIndex, scoreChange) => {
    const updatePlayers = this.state.players.map((player, index) => {
      if (index === playerIndex) {
        const updatePlayer = {
          ...player,
          score: player.score + scoreChange * this.state.multiplier
        };

        return updatePlayer;
      }
      return player;
    });

    const players = updatePlayers;

    this.setState({
      players: players
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
          onPlayerNameUpdate={this.onPlayerNameUpdate}
          onPlayerRemove={this.onPlayerRemove}
        />
      </div>
    );
  }
}

export default App;
