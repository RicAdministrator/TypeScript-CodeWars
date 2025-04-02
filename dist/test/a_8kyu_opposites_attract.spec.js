"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_opposites_attract_1 = require("../src/a_8kyu_opposites_attract");
describe("Test a_8kyu_opposites_attract", function () {
    it("Basic tests", function () {
        chai_1.assert.isTrue((0, a_8kyu_opposites_attract_1.lovefunc)(1, 4));
        chai_1.assert.isFalse((0, a_8kyu_opposites_attract_1.lovefunc)(2, 2));
        chai_1.assert.isTrue((0, a_8kyu_opposites_attract_1.lovefunc)(0, 1));
        chai_1.assert.isFalse((0, a_8kyu_opposites_attract_1.lovefunc)(0, 0));
    });
});
//# sourceMappingURL=a_8kyu_opposites_attract.spec.js.map