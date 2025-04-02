"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution = require("../src/a_8kyu_get_the_mean_of_an_array");
const chai_1 = require("chai");
describe("Test a_8kyu_get_the_mean_of_an_array", function () {
    it("Basic Tests", function () {
        chai_1.assert.equal(solution.getAverage([2, 2, 2, 2]), 2);
        chai_1.assert.equal(solution.getAverage([1, 2, 3, 4, 5,]), 3);
        chai_1.assert.equal(solution.getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
        chai_1.assert.equal(solution.getAverage([1, 5, 87, 45, 8, 8]), 25);
        chai_1.assert.equal(solution.getAverage([5, 18, 6, 2, 16, 11, 14, 17, 5, 15, 3, 11, 3]), 9);
    });
});
//# sourceMappingURL=a_8kyu_get_the_mean_of_an_array.spec.js.map