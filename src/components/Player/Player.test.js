import Player from "./Player";
import React from "react";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  mount(<Player />);
});

it("renders correct name", () => {
  const playerNamePassed = "Ania";
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find(".Player__name").text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});
it("renders correct score", () => {
  const playerScorePassed = 1;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = playerComponent.find(".Player__score").text();

  expect(parseInt(playerScoreRendered)).toEqual(playerScorePassed);
});

it("should call onPlayerScoreChange with 1 when plus button is clicked", () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
  );

  const plusButton = playerComponent.find(".Player__button").at(1);

  plusButton.simulate("click");

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it("should call onPlayerScoreChange with -1 when plus button is clicked", () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
  );

  const plusButton = playerComponent.find(".Player__button").first();

  plusButton.simulate("click");

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it("should call onPlayerRemove with -1 when plus button is clicked", () => {
  const mockedonPlayerRemove = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerRemove={mockedonPlayerRemove} />
  );

  const removeButton = playerComponent.find(".Player__button").last();

  removeButton.simulate("click");

  expect(mockedonPlayerRemove).toBeCalled();
});
