"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_square_n_sum_1 = require("../src/a_8kyu_square_n_sum");
const chai_1 = require("chai");
describe("Test a_8kyu_square_n_sum", function () {
    it("Should return a number", function () {
        chai_1.assert.equal((0, a_8kyu_square_n_sum_1.squareSum)([1, 2]), 5);
        chai_1.assert.equal((0, a_8kyu_square_n_sum_1.squareSum)([0, 3, 4, 5]), 50);
        chai_1.assert.equal((0, a_8kyu_square_n_sum_1.squareSum)([]), 0);
    });
});
//# sourceMappingURL=a_8kyu_square_n_sum.spec.js.map