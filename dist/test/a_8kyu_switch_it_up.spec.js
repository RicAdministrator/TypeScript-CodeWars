"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_switch_it_up_1 = require("../src/a_8kyu_switch_it_up");
const chai_1 = require("chai");
describe("Test a_8kyu_switch_it_up", function () {
    it("Basic Tests", function () {
        chai_1.assert.equal((0, a_8kyu_switch_it_up_1.switchItUp)(1), "One");
        chai_1.assert.equal((0, a_8kyu_switch_it_up_1.switchItUp)(3), "Three");
        chai_1.assert.equal((0, a_8kyu_switch_it_up_1.switchItUp)(5), "Five");
    });
});
//# sourceMappingURL=a_8kyu_switch_it_up.spec.js.map