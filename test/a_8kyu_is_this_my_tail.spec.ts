import { assert } from "chai";
import { correctTail } from "../src/a_8kyu_is_this_my_tail";

describe("Test a_8kyu_is_this_my_tail", () => {
    it("Fixed tests", () => {
        assert.strictEqual(correctTail("Fox", "x"), true);
        assert.strictEqual(correctTail("Rhino", "o"), true);
        assert.strictEqual(correctTail("Meerkat", "t"), true);
        assert.strictEqual(correctTail("Emu", "t"), false);
        assert.strictEqual(correctTail("Badger", "s"), false);
        assert.strictEqual(correctTail("Giraffe", "d"), false);
    });
});