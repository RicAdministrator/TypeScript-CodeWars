"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_do_i_get_a_bonus_1 = require("../src/a_8kyu_do_i_get_a_bonus");
describe("Test a_8kyu_do_i_get_a_bonus", function () {
    it("Basic tests", function () {
        chai_1.assert.equal(a_8kyu_do_i_get_a_bonus_1.Kata.bonusTime(10000, true), '£100000');
        chai_1.assert.equal(a_8kyu_do_i_get_a_bonus_1.Kata.bonusTime(10000, false), '£10000');
        chai_1.assert.equal(a_8kyu_do_i_get_a_bonus_1.Kata.bonusTime(25000, true), '£250000');
        chai_1.assert.equal(a_8kyu_do_i_get_a_bonus_1.Kata.bonusTime(60000, false), '£60000');
        chai_1.assert.equal(a_8kyu_do_i_get_a_bonus_1.Kata.bonusTime(2, true), '£20');
        chai_1.assert.equal(a_8kyu_do_i_get_a_bonus_1.Kata.bonusTime(78, false), '£78');
        chai_1.assert.equal(a_8kyu_do_i_get_a_bonus_1.Kata.bonusTime(67890, true), '£678900');
    });
});
//# sourceMappingURL=a_8kyu_do_i_get_a_bonus.spec.js.map