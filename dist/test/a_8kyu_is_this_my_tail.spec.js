"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_is_this_my_tail_1 = require("../src/a_8kyu_is_this_my_tail");
describe("Test a_8kyu_is_this_my_tail", () => {
    it("Fixed tests", () => {
        chai_1.assert.strictEqual((0, a_8kyu_is_this_my_tail_1.correctTail)("Fox", "x"), true);
        chai_1.assert.strictEqual((0, a_8kyu_is_this_my_tail_1.correctTail)("Rhino", "o"), true);
        chai_1.assert.strictEqual((0, a_8kyu_is_this_my_tail_1.correctTail)("Meerkat", "t"), true);
        chai_1.assert.strictEqual((0, a_8kyu_is_this_my_tail_1.correctTail)("Emu", "t"), false);
        chai_1.assert.strictEqual((0, a_8kyu_is_this_my_tail_1.correctTail)("Badger", "s"), false);
        chai_1.assert.strictEqual((0, a_8kyu_is_this_my_tail_1.correctTail)("Giraffe", "d"), false);
    });
});
//# sourceMappingURL=a_8kyu_is_this_my_tail.spec.js.map