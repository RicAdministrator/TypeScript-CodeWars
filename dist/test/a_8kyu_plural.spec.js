"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution = require("../src/a_8kyu_plural");
const chai_1 = require("chai");
describe("Test a_8kyu_plural", function () {
    it("BasicTests", function () {
        chai_1.assert.equal(solution.plural(0), true, "Plural for 0");
        chai_1.assert.equal(solution.plural(0.5), true, "Plural for 0.5");
        chai_1.assert.equal(solution.plural(1), false, "Plural for 1");
        chai_1.assert.equal(solution.plural(100), true, "Plural for 100");
        chai_1.assert.equal(solution.plural(Infinity), true, "Plural for Infinity");
    });
});
//# sourceMappingURL=a_8kyu_plural.spec.js.map