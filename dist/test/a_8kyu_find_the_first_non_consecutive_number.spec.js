"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_find_the_first_non_consecutive_number_1 = require("../src/a_8kyu_find_the_first_non_consecutive_number");
describe('Test a_8kyu_find_the_first_non_consecutive_number', function () {
    it('returns 6', function () {
        const first = (0, a_8kyu_find_the_first_non_consecutive_number_1.firstNonConsecutive)([1, 2, 3, 4, 6, 7, 8]);
        chai_1.assert.equal(first, 6);
    });
    it('returns null', function () {
        const first = (0, a_8kyu_find_the_first_non_consecutive_number_1.firstNonConsecutive)([4, 5, 6, 7, 8]);
        chai_1.assert.equal(first, null);
    });
});
//# sourceMappingURL=a_8kyu_find_the_first_non_consecutive_number.spec.js.map