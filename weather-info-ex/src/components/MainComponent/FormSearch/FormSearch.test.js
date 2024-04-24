import React from "react";
import { shallow } from "enzyme";
import FormSearch from "./FormSearch";

describe("FormSearch", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
