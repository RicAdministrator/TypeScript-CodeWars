import { twoSort } from "../src/a_8kyu_sort_and_star";
import { assert } from "chai";

describe("Test a_8kyu_sort_and_star", function () {
    it("Sample tests", function () {
        assert.equal(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n');
        assert.equal(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
        assert.equal(twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"]), 'a***b***o***u***t');
        assert.equal(twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]), 'c***o***d***e');
        assert.equal(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"]), 'L***e***t***s');
    });
});