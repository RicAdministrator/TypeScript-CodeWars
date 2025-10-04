"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_sum_without_highest_and_lowest_number_1 = require("../src/a_8kyu_sum_without_highest_and_lowest_number");
const chai_1 = require("chai");
describe("Test a_8kyu_sum_without_highest_and_lowest_number", function () {
    it("BasicTests", function () {
        chai_1.assert.deepEqual((0, a_8kyu_sum_without_highest_and_lowest_number_1.sumArray)([6, 2, 1, 8, 10]), 16);
        chai_1.assert.deepEqual((0, a_8kyu_sum_without_highest_and_lowest_number_1.sumArray)([6, 0, 1, 10, 10]), 17);
    });
});
//# sourceMappingURL=a_8kyu_sum_without_highest_and_lowest_number.spec.js.map