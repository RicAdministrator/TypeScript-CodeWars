"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_short_long_short_1 = require("../src/a_8kyu_short_long_short");
describe("Test a_8kyu_short_long_short", function () {
    it("Should pass basic tests", function () {
        chai_1.assert.equal((0, a_8kyu_short_long_short_1.shortLongShort)('45', '1'), '1451');
        chai_1.assert.equal((0, a_8kyu_short_long_short_1.shortLongShort)('13', '200'), '1320013');
        chai_1.assert.equal((0, a_8kyu_short_long_short_1.shortLongShort)('Soon', 'Me'), 'MeSoonMe');
        chai_1.assert.equal((0, a_8kyu_short_long_short_1.shortLongShort)('U', 'False'), 'UFalseU');
    });
});
//# sourceMappingURL=a_8kyu_short_long_short.spec.js.map