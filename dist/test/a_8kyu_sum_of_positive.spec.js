"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution = require("../src/a_8kyu_sum_of_positive");
const chai_1 = require("chai");
describe("Test a_8kyu_sum_of_positive", function () {
    it("Basic Tests", function () {
        chai_1.assert.equal(solution.positiveSum([1, 2, 3, 4, 5]), 15);
        chai_1.assert.equal(solution.positiveSum([1, -2, 3, 4, 5]), 13);
        chai_1.assert.equal(solution.positiveSum([]), 0);
        chai_1.assert.equal(solution.positiveSum([-1, -2, -3, -4, -5]), 0);
        chai_1.assert.equal(solution.positiveSum([-1, 2, 3, 4, -5]), 9);
    });
});
//# sourceMappingURL=a_8kyu_sum_of_positive.spec.js.map