"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_convert_number_to_reversed_array_of_digits_1 = require("../src/a_8kyu_convert_number_to_reversed_array_of_digits");
const chai_1 = require("chai");
describe("Test a_8kyu_convert_number_to_reversed_array_of_digits", function () {
    it("Sample test", function () {
        chai_1.assert.deepEqual((0, a_8kyu_convert_number_to_reversed_array_of_digits_1.digitize)(35231), [1, 3, 2, 5, 3]);
        chai_1.assert.deepEqual((0, a_8kyu_convert_number_to_reversed_array_of_digits_1.digitize)(0), [0]);
    });
});
//# sourceMappingURL=a_8kyu_convert_number_to_reversed_array_of_digits.spec.js.map