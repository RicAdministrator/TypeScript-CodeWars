import { assert } from "chai";
import { howManyLightsabersDoYouOwn } from "../src/a_8kyu_how_many_lightsabers_do_you_own";

describe("Test a_8kyu_how_many_lightsabers_do_you_own", function () {
    it("Basic tests", function () {
        assert.equal(howManyLightsabersDoYouOwn('Zach'), 18);
        assert.equal(howManyLightsabersDoYouOwn('Adam'), 0);
    });
});