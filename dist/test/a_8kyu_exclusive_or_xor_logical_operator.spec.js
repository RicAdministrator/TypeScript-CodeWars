"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_exclusive_or_xor_logical_operator_1 = require("../src/a_8kyu_exclusive_or_xor_logical_operator");
const chai_1 = require("chai");
describe("Test a_8kyu_exclusive_or_xor_logical_operator", () => {
    it("should work for the four basic cases described above", () => {
        chai_1.assert.equal((0, a_8kyu_exclusive_or_xor_logical_operator_1.xor)(false, false), false, "false xor false === false");
        chai_1.assert.equal((0, a_8kyu_exclusive_or_xor_logical_operator_1.xor)(true, false), true, "true xor false === true");
        chai_1.assert.equal((0, a_8kyu_exclusive_or_xor_logical_operator_1.xor)(false, true), true, "false xor true === true");
        chai_1.assert.equal((0, a_8kyu_exclusive_or_xor_logical_operator_1.xor)(true, true), false, "true xor true === false");
        chai_1.assert.notEqual((0, a_8kyu_exclusive_or_xor_logical_operator_1.xor)(true, true), true, "'xor' is NOT identical to 'or'");
    });
});
//# sourceMappingURL=a_8kyu_exclusive_or_xor_logical_operator.spec.js.map