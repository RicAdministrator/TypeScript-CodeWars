"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_i_love_you_a_little_a_lot_passionately_not_at_all_1 = require("../src/a_8kyu_i_love_you_a_little_a_lot_passionately_not_at_all");
describe("Test a_8kyu_i_love_you_a_little_a_lot_passionately_not_at_all", function () {
    it("Basic tests", function () {
        chai_1.assert.equal((0, a_8kyu_i_love_you_a_little_a_lot_passionately_not_at_all_1.howMuchILoveYou)(7), "I love you", "Number of petals can be higher than 6");
        chai_1.assert.equal((0, a_8kyu_i_love_you_a_little_a_lot_passionately_not_at_all_1.howMuchILoveYou)(3), "a lot");
        chai_1.assert.equal((0, a_8kyu_i_love_you_a_little_a_lot_passionately_not_at_all_1.howMuchILoveYou)(6), "not at all");
    });
});
//# sourceMappingURL=a_8kyu_i_love_you_a_little_a_lot_passionately_not_at_all.spec.js.map