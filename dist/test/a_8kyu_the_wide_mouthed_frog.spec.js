"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_the_wide_mouthed_frog_1 = require("../src/a_8kyu_the_wide_mouthed_frog");
describe("Test a_8kyu_the_wide_mouthed_frog", () => {
    it("Basic tests should pass", () => {
        chai_1.assert.equal((0, a_8kyu_the_wide_mouthed_frog_1.mouthSize)("toucan"), "wide");
        chai_1.assert.equal((0, a_8kyu_the_wide_mouthed_frog_1.mouthSize)("ant bear"), "wide");
        chai_1.assert.equal((0, a_8kyu_the_wide_mouthed_frog_1.mouthSize)("alligator"), "small");
    });
});
//# sourceMappingURL=a_8kyu_the_wide_mouthed_frog.spec.js.map