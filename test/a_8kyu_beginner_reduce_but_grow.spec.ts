import { assert } from "chai";
import { grow } from "../src/a_8kyu_beginner_reduce_but_grow";

describe("Test a_8kyu_beginner_reduce_but_grow", function () {
    it("Testing for [1, 2, 3]", () => assert.strictEqual(grow([1, 2, 3]), 6));
    it("Testing for [4, 1, 1, 1, 4]", () => assert.strictEqual(grow([4, 1, 1, 1, 4]), 16));
    it("Testing for [2, 2, 2, 2, 2, 2]", () => assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64));
});