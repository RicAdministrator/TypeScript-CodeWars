"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_count_the_monkeys_1 = require("../src/a_8kyu_count_the_monkeys");
describe("Test a_8kyu_count_the_monkeys", () => {
    it("Testing for 5", () => {
        chai_1.assert.deepEqual((0, a_8kyu_count_the_monkeys_1.monkeyCount)(5), [1, 2, 3, 4, 5]);
    });
    it("Testing for 3", () => {
        chai_1.assert.deepEqual((0, a_8kyu_count_the_monkeys_1.monkeyCount)(3), [1, 2, 3]);
    });
    it("Testing for 9", () => {
        chai_1.assert.deepEqual((0, a_8kyu_count_the_monkeys_1.monkeyCount)(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it("Testing for 10", () => {
        chai_1.assert.deepEqual((0, a_8kyu_count_the_monkeys_1.monkeyCount)(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("Testing for 20", () => {
        chai_1.assert.deepEqual((0, a_8kyu_count_the_monkeys_1.monkeyCount)(20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
});
//# sourceMappingURL=a_8kyu_count_the_monkeys.spec.js.map