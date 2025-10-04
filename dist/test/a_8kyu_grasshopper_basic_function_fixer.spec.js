"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_grasshopper_basic_function_fixer_1 = require("../src/a_8kyu_grasshopper_basic_function_fixer");
describe("Test a_8kyu_grasshopper_basic_function_fixer", function () {
    it("Fixed tests", function () {
        chai_1.assert.strictEqual((0, a_8kyu_grasshopper_basic_function_fixer_1.addFive)(5), 10);
        chai_1.assert.strictEqual((0, a_8kyu_grasshopper_basic_function_fixer_1.addFive)(0), 5);
        chai_1.assert.strictEqual((0, a_8kyu_grasshopper_basic_function_fixer_1.addFive)(-5), 0);
    });
});
//# sourceMappingURL=a_8kyu_grasshopper_basic_function_fixer.spec.js.map