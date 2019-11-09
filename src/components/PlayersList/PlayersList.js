import React from "react";
import Player from "../Player/Player";
import "./PlayersList.css";

const PlayersList = props => {
  const players = props.players.sort((curent, next) => {
    if (curent.score < next.score) return 1;
    if (curent.score > next.score) return -1;
    return 0;
  });
  return (
    <ul className="PlayersList">
      {players.map((player, i) => {
        return (
          <Player
            key={i}
            name={player.name}
            score={player.score}
            onPlayerScoreChange={points => props.onScoreUpdate(i, points)}
            onPlayerNameChange={name => props.onPlayerNameUpdate(i, name)}
            onPlayerRemove={() => props.onPlayerRemove(i)}
          />
        );
      })}
    </ul>
  );
};

export default PlayersList;
