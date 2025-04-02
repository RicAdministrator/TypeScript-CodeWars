import { assert } from "chai";
import { isUpperCase } from '../src/a_8kyu_is_the_string_uppercase';

describe('Test a_8kyu_is_the_string_uppercase', () => {
    it("Testing for c", () => assert.strictEqual(isUpperCase('c'), false));
    it("Testing for C", () => assert.strictEqual(isUpperCase('C'), true));
    it("Testing for hello I AM DONALD", () => assert.strictEqual(isUpperCase('hello I AM DONALD'), false));
    it("Testing for HELLO I AM DONALD", () => assert.strictEqual(isUpperCase('HELLO I AM DONALD'), true));
    it("Testing for ACSKLDFJSgSKLDFJSKLDFJ", () => assert.strictEqual(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ'), false));
    it("Testing for ACSKLDFJSGSKLDFJSKLDFJ", () => assert.strictEqual(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ'), true));
});