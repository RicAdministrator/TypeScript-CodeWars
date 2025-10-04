"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_to_squareroot_or_not_to_squareroot_1 = require("../src/a_8kyu_to_squareroot_or_not_to_squareroot");
const chai_1 = require("chai");
describe("Test a_8kyu_to_squareroot_or_not_to_squareroot", function () {
    it("basic tests 1", function () {
        let input = [4, 3, 9, 7, 2, 1];
        let expected = [2, 9, 3, 49, 4, 1];
        chai_1.assert.deepEqual((0, a_8kyu_to_squareroot_or_not_to_squareroot_1.squareOrSquareRoot)(input.slice()), expected);
    });
    it("basic test 2", function () {
        let input = [100, 101, 5, 5, 1, 1];
        let expected = [10, 10201, 25, 25, 1, 1];
        chai_1.assert.deepEqual((0, a_8kyu_to_squareroot_or_not_to_squareroot_1.squareOrSquareRoot)(input.slice()), expected);
    });
    it("basic test 3", function () {
        let input = [1, 2, 3, 4, 5, 6];
        let expected = [1, 4, 9, 2, 25, 36];
        chai_1.assert.deepEqual((0, a_8kyu_to_squareroot_or_not_to_squareroot_1.squareOrSquareRoot)(input.slice()), expected);
    });
});
//# sourceMappingURL=a_8kyu_to_squareroot_or_not_to_squareroot.spec.js.map