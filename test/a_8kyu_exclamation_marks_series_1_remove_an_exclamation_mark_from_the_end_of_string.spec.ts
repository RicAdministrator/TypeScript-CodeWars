import { remove } from "../src/a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string";
import { assert } from "chai";

describe("Test a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string", function () {
    it("It should works for basic tests", function () {
        assert.strictEqual(remove("Hi!"), "Hi");
        assert.strictEqual(remove("Hi!!!"), "Hi!!");
        assert.strictEqual(remove("!Hi"), "!Hi");
        assert.strictEqual(remove("!Hi!"), "!Hi");
        assert.strictEqual(remove("Hi! Hi!"), "Hi! Hi");
        assert.strictEqual(remove("Hi"), "Hi");
    });
});