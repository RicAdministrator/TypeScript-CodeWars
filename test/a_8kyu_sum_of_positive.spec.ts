import solution = require('../src/a_8kyu_sum_of_positive');
import { assert } from "chai";

describe("Test a_8kyu_sum_of_positive", function () {
    it("Basic Tests", function () {
        assert.equal(solution.positiveSum([1, 2, 3, 4, 5]), 15);
        assert.equal(solution.positiveSum([1, -2, 3, 4, 5]), 13);
        assert.equal(solution.positiveSum([]), 0);
        assert.equal(solution.positiveSum([-1, -2, -3, -4, -5]), 0);
        assert.equal(solution.positiveSum([-1, 2, 3, 4, -5]), 9);
    });
});