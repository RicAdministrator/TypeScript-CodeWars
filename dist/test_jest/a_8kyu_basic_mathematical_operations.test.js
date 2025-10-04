"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_basic_mathematical_operations_1 = require("../src/a_8kyu_basic_mathematical_operations");
test('Test a_8kyu_basic_mathematical_operations', () => {
    expect((0, a_8kyu_basic_mathematical_operations_1.basicOp)('+', 4, 7)).toBe(11);
    expect((0, a_8kyu_basic_mathematical_operations_1.basicOp)('-', 15, 18)).toBe(-3);
    expect((0, a_8kyu_basic_mathematical_operations_1.basicOp)('*', 5, 5)).toBe(25);
    expect((0, a_8kyu_basic_mathematical_operations_1.basicOp)('/', 49, 7)).toBe(7);
});
//# sourceMappingURL=a_8kyu_basic_mathematical_operations.test.js.map