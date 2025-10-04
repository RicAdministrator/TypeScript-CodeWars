"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_how_many_lightsabers_do_you_own_1 = require("../src/a_8kyu_how_many_lightsabers_do_you_own");
describe("Test a_8kyu_how_many_lightsabers_do_you_own", function () {
    it("Basic tests", function () {
        chai_1.assert.equal((0, a_8kyu_how_many_lightsabers_do_you_own_1.howManyLightsabersDoYouOwn)('Zach'), 18);
        chai_1.assert.equal((0, a_8kyu_how_many_lightsabers_do_you_own_1.howManyLightsabersDoYouOwn)('Adam'), 0);
    });
});
//# sourceMappingURL=a_8kyu_how_many_lightsabers_do_you_own.spec.js.map