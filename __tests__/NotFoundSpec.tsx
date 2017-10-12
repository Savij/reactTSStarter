import * as React from "react";
import "../src/Helper/tsHelpers";
import { shallow, ShallowWrapper } from "enzyme";
import NotFound from "../src/NotFound";

describe("NotFound", () => {
    let view: ShallowWrapper<{}, {}>;

    it("renders correctly", ()=>{
        view = shallow(<NotFound />);
        expect(view.find("div").at(0).text()).toEqual("Not Found");
    });
});
