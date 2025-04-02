import solution = require('../src/a_8kyu_switch_it_up');
import { assert } from "chai";

describe("Test a_8kyu_switch_it_up", function () {
    it("Basic Tests", function () {
        assert.equal(solution.switchItUp(1), "One");
        assert.equal(solution.switchItUp(3), "Three");
        assert.equal(solution.switchItUp(5), "Five");
    });
});