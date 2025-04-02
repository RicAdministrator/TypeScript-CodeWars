import { digitize } from "../src/a_8kyu_convert_number_to_reversed_array_of_digits";
import chai, { assert } from "chai";

describe("Test a_8kyu_convert_number_to_reversed_array_of_digits", function () {
    it("Sample test", function () {
        assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
        assert.deepEqual(digitize(0), [0]);
    });
});