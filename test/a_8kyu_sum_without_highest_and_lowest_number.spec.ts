import solution = require('../src/a_8kyu_sum_without_highest_and_lowest_number');
import { assert } from "chai";

describe("Test a_8kyu_sum_without_highest_and_lowest_number", function () {
    it("BasicTests", function () {
        assert.deepEqual(solution.sumArray([6, 2, 1, 8, 10]), 16);
        assert.deepEqual(solution.sumArray([6, 0, 1, 10, 10]), 17);
    });
});