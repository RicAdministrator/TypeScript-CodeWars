"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_basic_mathematical_operations_1 = require("../src/a_8kyu_basic_mathematical_operations");
const chai_1 = require("chai");
describe('Test a_8kyu_basic_mathematical_operations', () => {
    it('basic tests', () => {
        chai_1.assert.strictEqual((0, a_8kyu_basic_mathematical_operations_1.basicOp)('+', 4, 7), 11);
        chai_1.assert.strictEqual((0, a_8kyu_basic_mathematical_operations_1.basicOp)('-', 15, 18), -3);
        chai_1.assert.strictEqual((0, a_8kyu_basic_mathematical_operations_1.basicOp)('*', 5, 5), 25);
        chai_1.assert.strictEqual((0, a_8kyu_basic_mathematical_operations_1.basicOp)('/', 49, 7), 7);
    });
});
//# sourceMappingURL=a_8kyu_basic_mathematical_operations.spec.js.map