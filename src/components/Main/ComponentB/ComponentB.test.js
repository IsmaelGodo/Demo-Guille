import React from "react";
import { shallow } from "enzyme";
import ComponentB from "./ComponentB";

describe("ComponentB", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ComponentB />);
    expect(wrapper).toMatchSnapshot();
  });
});
