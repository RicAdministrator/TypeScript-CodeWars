"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_convert_a_number_to_a_string_1 = require("../src/a_8kyu_convert_a_number_to_a_string");
const chai_1 = require("chai");
describe("Test a_8kyu_convert_a_number_to_a_string", function () {
    it("should work correctly", () => {
        (0, chai_1.expect)((0, a_8kyu_convert_a_number_to_a_string_1.numberToString)(67)).to.equal('67');
    });
});
//# sourceMappingURL=a_8kyu_convert_a_number_to_a_string.spec.js.map