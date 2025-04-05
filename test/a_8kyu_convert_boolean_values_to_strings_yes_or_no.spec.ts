import { boolToWord } from "../src/a_8kyu_convert_boolean_values_to_strings_yes_or_no";
import { assert } from "chai";

describe("Test a_8kyu_convert_boolean_values_to_strings_yes_or_no", function () {
    it("Sample tests", function () {
        assert.equal(boolToWord(true), "Yes");
        assert.equal(boolToWord(false), "No");
    });
});