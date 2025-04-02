"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_grasshopper_summation_1 = require("../src/a_8kyu_grasshopper_summation");
describe('Test a_8kyu_grasshopper_summation', () => {
    it('basic tests', () => {
        chai_1.assert.equal((0, a_8kyu_grasshopper_summation_1.summation)(1), 1);
        chai_1.assert.equal((0, a_8kyu_grasshopper_summation_1.summation)(8), 36);
    });
});
//# sourceMappingURL=a_8kyu_grasshopper_summation.spec.js.map