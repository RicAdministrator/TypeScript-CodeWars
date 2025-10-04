import { assert } from "chai";
import { Kata } from '../src/a_8kyu_do_i_get_a_bonus';

describe("Test a_8kyu_do_i_get_a_bonus", function () {
    it("Basic tests", function () {
        assert.equal(Kata.bonusTime(10000, true), '£100000')
        assert.equal(Kata.bonusTime(10000, false), '£10000');
        assert.equal(Kata.bonusTime(25000, true), '£250000');
        assert.equal(Kata.bonusTime(60000, false), '£60000');
        assert.equal(Kata.bonusTime(2, true), '£20');
        assert.equal(Kata.bonusTime(78, false), '£78');
        assert.equal(Kata.bonusTime(67890, true), '£678900');
    });
});