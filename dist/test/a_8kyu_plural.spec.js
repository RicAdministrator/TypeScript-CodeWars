"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_plural_1 = require("../src/a_8kyu_plural");
const chai_1 = require("chai");
describe("Test a_8kyu_plural", function () {
    it("BasicTests", function () {
        chai_1.assert.equal((0, a_8kyu_plural_1.plural)(0), true, "Plural for 0");
        chai_1.assert.equal((0, a_8kyu_plural_1.plural)(0.5), true, "Plural for 0.5");
        chai_1.assert.equal((0, a_8kyu_plural_1.plural)(1), false, "Plural for 1");
        chai_1.assert.equal((0, a_8kyu_plural_1.plural)(100), true, "Plural for 100");
        chai_1.assert.equal((0, a_8kyu_plural_1.plural)(Infinity), true, "Plural for Infinity");
    });
});
//# sourceMappingURL=a_8kyu_plural.spec.js.map