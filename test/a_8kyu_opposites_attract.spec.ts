import { assert } from "chai";
import { lovefunc } from "../src/a_8kyu_opposites_attract";

describe("Test a_8kyu_opposites_attract", function() {
    it("Basic tests", function() {
        assert.isTrue(lovefunc(1, 4));
        assert.isFalse(lovefunc(2, 2));
        assert.isTrue(lovefunc(0, 1));
        assert.isFalse(lovefunc(0, 0));
    });
});