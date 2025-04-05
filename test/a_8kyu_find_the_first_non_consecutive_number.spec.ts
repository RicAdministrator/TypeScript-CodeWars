import { assert } from "chai";
import { firstNonConsecutive } from "../src/a_8kyu_find_the_first_non_consecutive_number";

describe('Test a_8kyu_find_the_first_non_consecutive_number', function () {
    it('returns 6', function () {
        const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
        assert.equal(first, 6);
    });
    it('returns null', function () {
        const first = firstNonConsecutive([4, 5, 6, 7, 8]);
        assert.equal(first, null);
    });
})