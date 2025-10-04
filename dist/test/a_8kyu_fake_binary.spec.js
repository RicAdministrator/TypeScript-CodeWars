"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_fake_binary_1 = require("../src/a_8kyu_fake_binary");
const chai_1 = require("chai");
describe("Test a_8kyu_fake_binary", function () {
    it("should work for simple cases", function () {
        chai_1.assert.equal((0, a_8kyu_fake_binary_1.fakeBin)('3456'), '0011');
        chai_1.assert.equal((0, a_8kyu_fake_binary_1.fakeBin)('45385593107843568'), '01011110001100111');
        chai_1.assert.equal((0, a_8kyu_fake_binary_1.fakeBin)('509321967506747'), '101000111101101');
        chai_1.assert.equal((0, a_8kyu_fake_binary_1.fakeBin)('366058562030849490134388085'), '011011110000101010000011011');
    });
});
//# sourceMappingURL=a_8kyu_fake_binary.spec.js.map