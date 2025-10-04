"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_keep_up_the_hoop_1 = require("../src/a_8kyu_keep_up_the_hoop");
describe("Test a_8kyu_keep_up_the_hoop", () => {
    it("Fixed tests", () => {
        chai_1.assert.strictEqual((0, a_8kyu_keep_up_the_hoop_1.hoopCount)(6), "Keep at it until you get it");
        chai_1.assert.strictEqual((0, a_8kyu_keep_up_the_hoop_1.hoopCount)(10), "Great, now move on to tricks");
        chai_1.assert.strictEqual((0, a_8kyu_keep_up_the_hoop_1.hoopCount)(22), "Great, now move on to tricks");
    });
});
//# sourceMappingURL=a_8kyu_keep_up_the_hoop.spec.js.map