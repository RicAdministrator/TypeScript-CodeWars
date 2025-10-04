"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_alternating_case_1 = require("../src/a_8kyu_alternating_case");
const chai_1 = require("chai");
describe("Test a_8kyu_alternating_case", function () {
    it("Should return a revesed case value", function () {
        chai_1.assert.equal((0, a_8kyu_alternating_case_1.toAlternatingCase)("hello world"), "HELLO WORLD");
        chai_1.assert.equal((0, a_8kyu_alternating_case_1.toAlternatingCase)("HeLLo WoRLD"), "hEllO wOrld");
        chai_1.assert.equal((0, a_8kyu_alternating_case_1.toAlternatingCase)("1a2b3c4d5e"), "1A2B3C4D5E");
    });
});
//# sourceMappingURL=a_8kyu_alternating_case.spec.js.map