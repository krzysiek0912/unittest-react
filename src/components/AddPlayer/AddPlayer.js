import React from "react";
import "./AddPlayer.css";

const AddPlayer = props => {
  let input;
  const onSubmit = event => {
    event.preventDefault();
    props.onPlayerAdd(input.value);
    input.value = "";
  };
  return (
    <form className="AddPlayer form-inline" onSubmit={onSubmit}>
      <input
        type="text"
        className="AddPlayer__input form-control"
        ref={node => (input = node)}
      />
      <input
        type="submit"
        className="AddPlayer__submit btn btn-primary"
        value="Add"
      />
    </form>
  );
};

export default AddPlayer;
