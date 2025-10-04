"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_find_maximum_and_minimum_values_of_a_list_1 = require("../src/a_8kyu_find_maximum_and_minimum_values_of_a_list");
const chai_1 = require("chai");
describe("Test a_8kyu_find_maximum_and_minimum_values_of_a_list", function () {
    it("min", function () {
        chai_1.assert.strictEqual((0, a_8kyu_find_maximum_and_minimum_values_of_a_list_1.min)([-52, 56, 30, 29, -54, 0, -110]), -110);
        chai_1.assert.strictEqual((0, a_8kyu_find_maximum_and_minimum_values_of_a_list_1.min)([42, 54, 65, 87, 0]), 0);
    });
    it("max", function () {
        chai_1.assert.strictEqual((0, a_8kyu_find_maximum_and_minimum_values_of_a_list_1.max)([4, 6, 2, 1, 9, 63, -134, 566]), 566);
        chai_1.assert.strictEqual((0, a_8kyu_find_maximum_and_minimum_values_of_a_list_1.max)([5]), 5);
    });
});
//# sourceMappingURL=a_8kyu_find_maximum_and_minimum_values_of_a_list.spec.js.map