import { sixToast } from '../src/a_8kyu_basic_making_six_toast';
import { assert } from "chai";

describe("Test a_8kyu_basic_making_six_toast", function () {
    it("Basic Tests", function () {
        assert.equal(sixToast(15), 9);
        assert.equal(sixToast(6), 0);
        assert.equal(sixToast(3), 3);
    });
});