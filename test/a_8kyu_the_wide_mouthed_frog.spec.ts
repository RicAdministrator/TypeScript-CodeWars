import { assert } from "chai";
import { mouthSize } from "../src/a_8kyu_the_wide_mouthed_frog";

describe("Test a_8kyu_the_wide_mouthed_frog", () => {
    it("Basic tests should pass", () => {
        assert.equal(mouthSize("toucan"),"wide");
        assert.equal(mouthSize("ant bear"),"wide");
        assert.equal(mouthSize("alligator"),"small");
    });
});