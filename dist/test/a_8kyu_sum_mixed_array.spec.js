"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_sum_mixed_array_1 = require("../src/a_8kyu_sum_mixed_array");
describe("Test a_8kyu_sum_mixed_array", () => {
    it("Example tests", () => {
        chai_1.assert.equal((0, a_8kyu_sum_mixed_array_1.sumMix)([9, 3, '7', '3']), 22);
        chai_1.assert.equal((0, a_8kyu_sum_mixed_array_1.sumMix)(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
        chai_1.assert.equal((0, a_8kyu_sum_mixed_array_1.sumMix)(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);
    });
});
//# sourceMappingURL=a_8kyu_sum_mixed_array.spec.js.map