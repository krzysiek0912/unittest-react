import PointsMultiplier from "./PointsMultiplier";
import React from "react";
import { mount } from "enzyme";

it("renders without crashing", () => {
  mount(<PointsMultiplier />);
});

it("should call onPlayerAdd with submit form", () => {
  const onMultiplierUpdate = jest.fn();
  const pointsMultiplierComponent = mount(
    <PointsMultiplier onMultiplierUpdate={onMultiplierUpdate} />
  );

  const multiplierInput = pointsMultiplierComponent
    .find("input")
    .first()
    .getDOMNode();

  multiplierInput.value = 2;

  const form = pointsMultiplierComponent.find("form");
  form.simulate("submit");

  expect(onMultiplierUpdate).toBeCalled();
});
