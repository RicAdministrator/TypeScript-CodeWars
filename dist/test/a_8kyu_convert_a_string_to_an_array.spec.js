"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_convert_a_string_to_an_array_1 = require("../src/a_8kyu_convert_a_string_to_an_array");
const chai_1 = require("chai");
describe('Test a_8kyu_convert_a_string_to_an_array', () => {
    it('example 1', () => {
        chai_1.assert.deepEqual((0, a_8kyu_convert_a_string_to_an_array_1.stringToArray)("Robin Singh"), ["Robin", "Singh"]);
    });
    it('example 2', () => {
        chai_1.assert.deepEqual((0, a_8kyu_convert_a_string_to_an_array_1.stringToArray)("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
    });
});
//# sourceMappingURL=a_8kyu_convert_a_string_to_an_array.spec.js.map