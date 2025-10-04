import { plural } from '../src/a_8kyu_plural';
import { assert } from "chai";

describe("Test a_8kyu_plural", function () {
    it("BasicTests", function () {
        assert.equal(plural(0), true, "Plural for 0");
        assert.equal(plural(0.5), true, "Plural for 0.5");
        assert.equal(plural(1), false, "Plural for 1");
        assert.equal(plural(100), true, "Plural for 100");
        assert.equal(plural(Infinity), true, "Plural for Infinity");
    });
});