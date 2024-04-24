import React from "react";
import { shallow } from "enzyme";
import WeatherList from "./WeatherList";

describe("WeatherList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherList />);
    expect(wrapper).toMatchSnapshot();
  });
});
