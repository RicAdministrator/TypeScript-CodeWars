"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_parse_nice_int_from_char_problem_1 = require("../src/a_8kyu_parse_nice_int_from_char_problem");
const chai_1 = require("chai");
describe("Test a_8kyu_parse_nice_int_from_char_problem", () => {
    it("Sample tests", () => {
        chai_1.assert.equal((0, a_8kyu_parse_nice_int_from_char_problem_1.get_age)("2 years old"), 2);
        chai_1.assert.equal((0, a_8kyu_parse_nice_int_from_char_problem_1.get_age)("4 years old"), 4);
        chai_1.assert.equal((0, a_8kyu_parse_nice_int_from_char_problem_1.get_age)("5 years old"), 5);
        chai_1.assert.equal((0, a_8kyu_parse_nice_int_from_char_problem_1.get_age)("7 years old"), 7);
    });
});
//# sourceMappingURL=a_8kyu_parse_nice_int_from_char_problem.spec.js.map