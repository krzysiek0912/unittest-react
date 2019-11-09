import React from "react";
import Player from "../Player/Player";
import "./PlayersList.css";

const PlayersList = props => {
  return (
    <ul className="PlayersList">
      {props.players.map((player, i) => {
        const multi = props.multiplier;
        return (
          <Player
            key={i}
            name={player.name}
            score={player.score}
            onPlayerScoreChange={points => props.onScoreUpdate(i, points)}
            onPlayerRemove={() => props.onPlayerRemove(i)}
          />
        );
      })}
    </ul>
  );
};

export default PlayersList;
