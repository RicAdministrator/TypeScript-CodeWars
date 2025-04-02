import { numberToString } from '../src/a_8kyu_convert_a_number_to_a_string';
import { expect } from "chai";

describe("Test a_8kyu_convert_a_number_to_a_string", function () {
    it("should work correctly", () => {
        expect(numberToString(67)).to.equal('67');
    });
});