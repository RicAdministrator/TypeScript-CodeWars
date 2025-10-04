"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_sort_and_star_1 = require("../src/a_8kyu_sort_and_star");
const chai_1 = require("chai");
describe("Test a_8kyu_sort_and_star", function () {
    it("Sample tests", function () {
        chai_1.assert.equal((0, a_8kyu_sort_and_star_1.twoSort)(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n');
        chai_1.assert.equal((0, a_8kyu_sort_and_star_1.twoSort)(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
        chai_1.assert.equal((0, a_8kyu_sort_and_star_1.twoSort)(["lets", "talk", "about", "javascript", "the", "best", "language"]), 'a***b***o***u***t');
        chai_1.assert.equal((0, a_8kyu_sort_and_star_1.twoSort)(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]), 'c***o***d***e');
        chai_1.assert.equal((0, a_8kyu_sort_and_star_1.twoSort)(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"]), 'L***e***t***s');
    });
});
//# sourceMappingURL=a_8kyu_sort_and_star.spec.js.map