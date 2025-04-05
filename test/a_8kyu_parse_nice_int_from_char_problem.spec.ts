import { get_age } from '../src/a_8kyu_parse_nice_int_from_char_problem';
import { assert } from "chai";

describe("Test a_8kyu_parse_nice_int_from_char_problem", () => {
    it("Sample tests", () => {
        assert.equal(get_age("2 years old"), 2);
        assert.equal(get_age("4 years old"), 4);
        assert.equal(get_age("5 years old"), 5);
        assert.equal(get_age("7 years old"), 7);
    });
});