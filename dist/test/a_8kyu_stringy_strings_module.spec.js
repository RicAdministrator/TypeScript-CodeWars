"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_stringy_strings_module_1 = require("../src/a_8kyu_stringy_strings_module");
const solutions = [
    [3, '101'],
    [5, '10101'],
    [12, '101010101010'],
    [26, '10101010101010101010101010'],
    [28, '1010101010101010101010101010'],
];
describe('Test a_8kyu_stringy_strings_module', () => {
    solutions.forEach(([input, expected]) => {
        it(`Works with ${input}`, () => {
            chai_1.assert.strictEqual((0, a_8kyu_stringy_strings_module_1.stringy)(input), expected);
        });
    });
});
//# sourceMappingURL=a_8kyu_stringy_strings_module.spec.js.map