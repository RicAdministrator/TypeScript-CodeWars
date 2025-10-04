"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_convert_boolean_values_to_strings_yes_or_no_1 = require("../src/a_8kyu_convert_boolean_values_to_strings_yes_or_no");
const chai_1 = require("chai");
describe("Test a_8kyu_convert_boolean_values_to_strings_yes_or_no", function () {
    it("Sample tests", function () {
        chai_1.assert.equal((0, a_8kyu_convert_boolean_values_to_strings_yes_or_no_1.boolToWord)(true), "Yes");
        chai_1.assert.equal((0, a_8kyu_convert_boolean_values_to_strings_yes_or_no_1.boolToWord)(false), "No");
    });
});
//# sourceMappingURL=a_8kyu_convert_boolean_values_to_strings_yes_or_no.spec.js.map