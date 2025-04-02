"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_string_templates_bug_fixing_5_1 = require("../src/a_8kyu_string_templates_bug_fixing_5");
describe("Test a_8kyu_string_templates_bug_fixing_5", function () {
    it("Basic tests", function () {
        chai_1.assert.equal((0, a_8kyu_string_templates_bug_fixing_5_1.buildString)('Cheese', 'Milk', 'Chocolate'), 'I like Cheese, Milk, Chocolate!');
        chai_1.assert.equal((0, a_8kyu_string_templates_bug_fixing_5_1.buildString)('Cheese', 'Milk'), 'I like Cheese, Milk!');
        chai_1.assert.equal((0, a_8kyu_string_templates_bug_fixing_5_1.buildString)('Chocolate'), 'I like Chocolate!');
    });
});
//# sourceMappingURL=a_8kyu_string_templates_bug_fixing_5.spec.js.map