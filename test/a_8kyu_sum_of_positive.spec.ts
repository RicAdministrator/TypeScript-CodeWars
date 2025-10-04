import { positiveSum } from '../src/a_8kyu_sum_of_positive';
import { assert } from "chai";

describe("Test a_8kyu_sum_of_positive", function () {
    it("Basic Tests", function () {
        assert.equal(positiveSum([1, 2, 3, 4, 5]), 15);
        assert.equal(positiveSum([1, -2, 3, 4, 5]), 13);
        assert.equal(positiveSum([]), 0);
        assert.equal(positiveSum([-1, -2, -3, -4, -5]), 0);
        assert.equal(positiveSum([-1, 2, 3, 4, -5]), 9);
    });
});