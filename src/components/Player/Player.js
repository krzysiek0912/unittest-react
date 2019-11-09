import React from "react";
import "./Player.css";

const Player = props => {
  return (
    <>
      <li className="Player">
        <span className="Player__name">{props.name}</span>
        <span className="Player__score">{props.score}</span>
        <span
          className="Player__button btn btn-outline-warning"
          onClick={() => props.onPlayerScoreChange(-1)}
        >
          - {props.multipiler}
        </span>
        <span
          className="Player__button btn btn-outline-success"
          onClick={() => props.onPlayerScoreChange(1)}
        >
          +
        </span>
        <span
          className="Player__button btn btn-outline-danger"
          onClick={props.onPlayerRemove}
        >
          remove
        </span>
      </li>
    </>
  );
};

export default Player;