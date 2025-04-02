import { assert } from "chai";
import { maps } from "../src/a_8kyu_beginner_lost_without_a_map";

describe("Test a_8kyu_beginner_lost_without_a_map", () => {
    it("Fixed tests", () => {
        assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
        assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
        assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
    });
});