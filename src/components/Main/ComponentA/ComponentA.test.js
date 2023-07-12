import React from "react";
import { shallow } from "enzyme";
import ComponentA from "./ComponentA";

describe("ComponentA", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ComponentA />);
    expect(wrapper).toMatchSnapshot();
  });
});
