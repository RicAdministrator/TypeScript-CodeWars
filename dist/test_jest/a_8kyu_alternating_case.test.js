"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_alternating_case_1 = require("../src/a_8kyu_alternating_case");
test('Test a_8kyu_alternating_case', () => {
    expect((0, a_8kyu_alternating_case_1.toAlternatingCase)("hello world")).toBe("HELLO WORLD");
    expect((0, a_8kyu_alternating_case_1.toAlternatingCase)("HeLLo WoRLD")).toBe("hEllO wOrld");
    expect((0, a_8kyu_alternating_case_1.toAlternatingCase)("1a2b3c4d5e")).toBe("1A2B3C4D5E");
});
//# sourceMappingURL=a_8kyu_alternating_case.test.js.map