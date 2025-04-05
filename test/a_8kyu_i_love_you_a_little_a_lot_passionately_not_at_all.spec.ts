import { assert } from "chai";
import { howMuchILoveYou } from "../src/a_8kyu_i_love_you_a_little_a_lot_passionately_not_at_all";

describe("Test a_8kyu_i_love_you_a_little_a_lot_passionately_not_at_all", function () {
    it("Basic tests", function () {
        assert.equal(howMuchILoveYou(7), "I love you", "Number of petals can be higher than 6");
        assert.equal(howMuchILoveYou(3), "a lot");
        assert.equal(howMuchILoveYou(6), "not at all");
    });
});