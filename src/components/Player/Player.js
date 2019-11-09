import React from "react";
import "./Player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.state = {
      name: this.props.name,
      isEdit: false
    };
  }

  handleEdit = ({ target }) => {
    this.setState({
      isEdit: !this.state.isEdit
    });
  };
  handleChange = ({ target }) => {
    this.setState({
      name: target.value
    });
    this.props.onPlayerNameChange(target.value);
  };
  render() {
    const { inputName } = this;
    const { name, isEdit } = this.state;
    const { score, onPlayerScoreChange, onPlayerRemove } = this.props;
    return (
      <>
        <li className="Player">
          <span className="Player__name" onClick={this.handleEdit}>
            {(!isEdit && name) || (
              <input
                autoFocus
                value={name}
                ref={inputName}
                onChange={this.handleChange}
              />
            )}
          </span>
          <span className="Player__score">{score}</span>
          <span
            className="Player__button btn btn-outline-warning"
            onClick={() => onPlayerScoreChange(-1)}
          >
            -
          </span>
          <span
            className="Player__button btn btn-outline-success"
            onClick={() => onPlayerScoreChange(1)}
          >
            +
          </span>
          <span
            className="Player__button btn btn-outline-danger"
            onClick={onPlayerRemove}
          >
            remove
          </span>
        </li>
      </>
    );
  }
}

export default Player;
