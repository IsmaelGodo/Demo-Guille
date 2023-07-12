import React from "react";
import { shallow } from "enzyme";
import FechApi from "./FechApi";

describe("FechApi", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FechApi />);
    expect(wrapper).toMatchSnapshot();
  });
});
