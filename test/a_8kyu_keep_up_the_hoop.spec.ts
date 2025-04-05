import { assert } from "chai";
import { hoopCount } from "../src/a_8kyu_keep_up_the_hoop";

describe("Test a_8kyu_keep_up_the_hoop", () => {
    it("Fixed tests", () => {
        assert.strictEqual(hoopCount(6), "Keep at it until you get it");
        assert.strictEqual(hoopCount(10), "Great, now move on to tricks");
        assert.strictEqual(hoopCount(22), "Great, now move on to tricks");
    });
});