import { assert } from "chai";
import { getRealFloor } from "../src/a_8kyu_whats_the_real_floor";

describe("Test a_8kyu_whats_the_real_floor", function () {
    it("test", function () {
        assert.equal(getRealFloor(1), 0);
        assert.equal(getRealFloor(5), 4);
        assert.equal(getRealFloor(15), 13);
    });
});