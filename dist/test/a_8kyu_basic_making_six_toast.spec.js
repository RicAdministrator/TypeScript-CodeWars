"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_basic_making_six_toast_1 = require("../src/a_8kyu_basic_making_six_toast");
const chai_1 = require("chai");
describe("Test a_8kyu_basic_making_six_toast", function () {
    it("Basic Tests", function () {
        chai_1.assert.equal((0, a_8kyu_basic_making_six_toast_1.sixToast)(15), 9);
        chai_1.assert.equal((0, a_8kyu_basic_making_six_toast_1.sixToast)(6), 0);
        chai_1.assert.equal((0, a_8kyu_basic_making_six_toast_1.sixToast)(3), 3);
    });
});
//# sourceMappingURL=a_8kyu_basic_making_six_toast.spec.js.map