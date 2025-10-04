import { squareSum } from '../src/a_8kyu_square_n_sum';
import { assert } from "chai";

describe("Test a_8kyu_square_n_sum", function () {
    it("Should return a number", function () {
        assert.equal(squareSum([1, 2]), 5);
        assert.equal(squareSum([0, 3, 4, 5]), 50);
        assert.equal(squareSum([]), 0);
    });
});