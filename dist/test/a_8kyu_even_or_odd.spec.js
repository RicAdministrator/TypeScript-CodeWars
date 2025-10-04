"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_even_or_odd_1 = require("../src/a_8kyu_even_or_odd");
const chai_1 = require("chai");
describe("Test a_8kyu_even_or_odd", function () {
    it("evenOrOdd(1) should return 'Odd'", function () {
        chai_1.assert.equal((0, a_8kyu_even_or_odd_1.evenOrOdd)(1), "Odd");
    });
    it("evenOrOdd(2) should return 'Even'", function () {
        chai_1.assert.equal((0, a_8kyu_even_or_odd_1.evenOrOdd)(2), "Even");
    });
    it("evenOrOdd(-1) should return 'Odd'", function () {
        chai_1.assert.equal((0, a_8kyu_even_or_odd_1.evenOrOdd)(-1), "Odd");
    });
    it("evenOrOdd(-2) should return 'Even'", function () {
        chai_1.assert.equal((0, a_8kyu_even_or_odd_1.evenOrOdd)(-2), "Even");
    });
    it("evenOrOdd(0) should return 'Even'", function () {
        chai_1.assert.equal((0, a_8kyu_even_or_odd_1.evenOrOdd)(0), "Even");
    });
});
//# sourceMappingURL=a_8kyu_even_or_odd.spec.js.map