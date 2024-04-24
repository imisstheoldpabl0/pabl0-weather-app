import React from "react";
import { shallow } from "enzyme";
import MainComponent from "./MainComponent";

describe("MainComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MainComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
