import { assert } from "chai";
import { solution } from "../src/i_codility_smallest_positive_integer";

describe("Test i_codility_smallest_positive_integer", () => {
    it("test", () => {
        assert.equal(solution([1, 3, 6, 4, 1, 2]), 5);
        assert.equal(solution([1, 2, 3]), 4);
        assert.equal(solution([-1, -3]), 1);
    });
});