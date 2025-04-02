"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_beginner_lost_without_a_map_1 = require("../src/a_8kyu_beginner_lost_without_a_map");
describe("Test a_8kyu_beginner_lost_without_a_map", () => {
    it("Fixed tests", () => {
        chai_1.assert.deepEqual((0, a_8kyu_beginner_lost_without_a_map_1.maps)([1, 2, 3]), [2, 4, 6]);
        chai_1.assert.deepEqual((0, a_8kyu_beginner_lost_without_a_map_1.maps)([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
        chai_1.assert.deepEqual((0, a_8kyu_beginner_lost_without_a_map_1.maps)([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
    });
});
//# sourceMappingURL=a_8kyu_beginner_lost_without_a_map.spec.js.map