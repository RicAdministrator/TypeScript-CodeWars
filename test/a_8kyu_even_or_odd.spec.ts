import { evenOrOdd } from "../src/a_8kyu_even_or_odd";
import { assert } from "chai";

describe("Test a_8kyu_even_or_odd", function () {
    it("evenOrOdd(1) should return 'Odd'", function () {
        assert.equal(evenOrOdd(1), "Odd");
    });
    it("evenOrOdd(2) should return 'Even'", function () {
        assert.equal(evenOrOdd(2), "Even");
    });
    it("evenOrOdd(-1) should return 'Odd'", function () {
        assert.equal(evenOrOdd(-1), "Odd");
    });
    it("evenOrOdd(-2) should return 'Even'", function () {
        assert.equal(evenOrOdd(-2), "Even");
    });
    it("evenOrOdd(0) should return 'Even'", function () {
        assert.equal(evenOrOdd(0), "Even");
    });
});