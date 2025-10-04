import { fakeBin } from '../src/a_8kyu_fake_binary';
import { assert } from "chai";

describe("Test a_8kyu_fake_binary", function () {
    it("should work for simple cases", function () {
        assert.equal(fakeBin('3456'), '0011');
        assert.equal(fakeBin('45385593107843568'), '01011110001100111');
        assert.equal(fakeBin('509321967506747'), '101000111101101');
        assert.equal(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
    });
});