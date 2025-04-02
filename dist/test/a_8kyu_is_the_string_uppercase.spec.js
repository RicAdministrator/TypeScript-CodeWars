"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_is_the_string_uppercase_1 = require("../src/a_8kyu_is_the_string_uppercase");
describe('Test a_8kyu_is_the_string_uppercase', () => {
    it("Testing for c", () => chai_1.assert.strictEqual((0, a_8kyu_is_the_string_uppercase_1.isUpperCase)('c'), false));
    it("Testing for C", () => chai_1.assert.strictEqual((0, a_8kyu_is_the_string_uppercase_1.isUpperCase)('C'), true));
    it("Testing for hello I AM DONALD", () => chai_1.assert.strictEqual((0, a_8kyu_is_the_string_uppercase_1.isUpperCase)('hello I AM DONALD'), false));
    it("Testing for HELLO I AM DONALD", () => chai_1.assert.strictEqual((0, a_8kyu_is_the_string_uppercase_1.isUpperCase)('HELLO I AM DONALD'), true));
    it("Testing for ACSKLDFJSgSKLDFJSKLDFJ", () => chai_1.assert.strictEqual((0, a_8kyu_is_the_string_uppercase_1.isUpperCase)('ACSKLDFJSgSKLDFJSKLDFJ'), false));
    it("Testing for ACSKLDFJSGSKLDFJSKLDFJ", () => chai_1.assert.strictEqual((0, a_8kyu_is_the_string_uppercase_1.isUpperCase)('ACSKLDFJSGSKLDFJSKLDFJ'), true));
});
//# sourceMappingURL=a_8kyu_is_the_string_uppercase.spec.js.map