"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_whats_the_real_floor_1 = require("../src/a_8kyu_whats_the_real_floor");
describe("Test a_8kyu_whats_the_real_floor", function () {
    it("test", function () {
        chai_1.assert.equal((0, a_8kyu_whats_the_real_floor_1.getRealFloor)(1), 0);
        chai_1.assert.equal((0, a_8kyu_whats_the_real_floor_1.getRealFloor)(5), 4);
        chai_1.assert.equal((0, a_8kyu_whats_the_real_floor_1.getRealFloor)(15), 13);
    });
});
//# sourceMappingURL=a_8kyu_whats_the_real_floor.spec.js.map