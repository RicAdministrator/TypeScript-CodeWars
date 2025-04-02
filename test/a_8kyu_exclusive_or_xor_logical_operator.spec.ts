import { xor } from '../src/a_8kyu_exclusive_or_xor_logical_operator'
import { assert } from "chai";

describe("Test a_8kyu_exclusive_or_xor_logical_operator", () => {
    it("should work for the four basic cases described above", () => {
        assert.equal(xor(false, false), false, "false xor false === false");
        assert.equal(xor(true, false), true, "true xor false === true");
        assert.equal(xor(false, true), true, "false xor true === true");
        assert.equal(xor(true, true), false, "true xor true === false");
        assert.notEqual(xor(true, true), true, "'xor' is NOT identical to 'or'");
    });
});