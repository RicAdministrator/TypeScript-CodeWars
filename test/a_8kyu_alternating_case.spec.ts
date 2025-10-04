import { toAlternatingCase } from '../src/a_8kyu_alternating_case';
import { assert } from "chai";

describe("Test a_8kyu_alternating_case", function () {
    it("Should return a revesed case value", function () {
        assert.equal(toAlternatingCase("hello world"), "HELLO WORLD");
        assert.equal(toAlternatingCase("HeLLo WoRLD"), "hEllO wOrld");
        assert.equal(toAlternatingCase("1a2b3c4d5e"), "1A2B3C4D5E");
    });
});