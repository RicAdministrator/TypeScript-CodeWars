"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_exclusive_or_xor_logical_operator_1 = require("../src/a_8kyu_exclusive_or_xor_logical_operator");
test('Test a_8kyu_exclusive_or_xor_logical_operator', () => {
    expect((0, a_8kyu_exclusive_or_xor_logical_operator_1.xor)(false, false)).toBe(false);
    expect((0, a_8kyu_exclusive_or_xor_logical_operator_1.xor)(true, false)).toBe(true);
    expect((0, a_8kyu_exclusive_or_xor_logical_operator_1.xor)(false, true)).toBe(true);
    expect((0, a_8kyu_exclusive_or_xor_logical_operator_1.xor)(true, true)).toBe(false);
    expect((0, a_8kyu_exclusive_or_xor_logical_operator_1.xor)(true, true)).not.toBe(true);
});
//# sourceMappingURL=a_8kyu_exclusive_or_xor_logical_operator.test.js.map