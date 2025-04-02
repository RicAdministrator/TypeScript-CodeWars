import { stringToNumber } from "../src/a_8kyu_convert_a_string_to_a_number";
import { assert } from "chai";

describe("Test a_8kyu_convert_a_string_to_a_number", function () {
    it("should work for the examples", function () {
        assert.strictEqual(stringToNumber("1234"), 1234);
        assert.strictEqual(stringToNumber("605"), 605);
        assert.strictEqual(stringToNumber("1405"), 1405);
        assert.strictEqual(stringToNumber("-7"), -7);
    });
});