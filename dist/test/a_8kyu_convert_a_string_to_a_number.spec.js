"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_convert_a_string_to_a_number_1 = require("../src/a_8kyu_convert_a_string_to_a_number");
const chai_1 = require("chai");
describe("Test a_8kyu_convert_a_string_to_a_number", function () {
    it("should work for the examples", function () {
        chai_1.assert.strictEqual((0, a_8kyu_convert_a_string_to_a_number_1.stringToNumber)("1234"), 1234);
        chai_1.assert.strictEqual((0, a_8kyu_convert_a_string_to_a_number_1.stringToNumber)("605"), 605);
        chai_1.assert.strictEqual((0, a_8kyu_convert_a_string_to_a_number_1.stringToNumber)("1405"), 1405);
        chai_1.assert.strictEqual((0, a_8kyu_convert_a_string_to_a_number_1.stringToNumber)("-7"), -7);
    });
});
//# sourceMappingURL=a_8kyu_convert_a_string_to_a_number.spec.js.map