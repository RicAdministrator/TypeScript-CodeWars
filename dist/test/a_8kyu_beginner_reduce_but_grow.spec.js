"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_beginner_reduce_but_grow_1 = require("../src/a_8kyu_beginner_reduce_but_grow");
describe("Test a_8kyu_beginner_reduce_but_grow", function () {
    it("Testing for [1, 2, 3]", () => chai_1.assert.strictEqual((0, a_8kyu_beginner_reduce_but_grow_1.grow)([1, 2, 3]), 6));
    it("Testing for [4, 1, 1, 1, 4]", () => chai_1.assert.strictEqual((0, a_8kyu_beginner_reduce_but_grow_1.grow)([4, 1, 1, 1, 4]), 16));
    it("Testing for [2, 2, 2, 2, 2, 2]", () => chai_1.assert.strictEqual((0, a_8kyu_beginner_reduce_but_grow_1.grow)([2, 2, 2, 2, 2, 2]), 64));
});
//# sourceMappingURL=a_8kyu_beginner_reduce_but_grow.spec.js.map