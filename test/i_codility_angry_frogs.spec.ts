import { assert } from "chai";
import { solution } from "../src/i_codility_angry_frogs";

describe("Test i_codility_angry_frogs", () => {
    it("test", () => {
        assert.equal(solution([2, 6, 8, 5]), 3);
        assert.equal(solution([1, 5, 5, 2, 6]), 4);
        assert.equal(solution([1, 1]), 2);
        assert.equal(solution([1]), 1);
        assert.equal(solution([10]), 1);
    });
});