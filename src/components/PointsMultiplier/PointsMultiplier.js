import React from "react";
import "./PointsMultiplier.css";

class PointsMultiplier extends React.Component {
  state = {
    multiplier: this.props.multiplier
  };
  handlerChange = ({ target }) => {
    this.setState(
      {
        multiplier: target.value
      },
      () => {
        this.props.onMultiplierUpdate(this.state.multiplier);
      }
    );
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onMultiplierUpdate(this.state.multiplier);
  };
  render() {
    return (
      <form className="PointsMultiplier form-inline" onSubmit={this.onSubmit}>
        <label htmlFor="PointsMultiplier__input">Change multiplier</label>
        <br />
        <input
          type="text"
          className="PointsMultiplier__input form-control"
          onChange={this.handlerChange}
          value={this.state.multiplier}
        />
      </form>
    );
  }
}

export default PointsMultiplier;
