"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_keep_hydrated_1 = require("../src/a_8kyu_keep_hydrated");
const chai_1 = require("chai");
describe('Test a_8kyu_keep_hydrated', () => {
    it('Some basic tests', () => {
        chai_1.assert.equal((0, a_8kyu_keep_hydrated_1.litres)(2), 1);
        chai_1.assert.equal((0, a_8kyu_keep_hydrated_1.litres)(1.4), 0);
        chai_1.assert.equal((0, a_8kyu_keep_hydrated_1.litres)(12.3), 6);
        chai_1.assert.equal((0, a_8kyu_keep_hydrated_1.litres)(0.82), 0);
        chai_1.assert.equal((0, a_8kyu_keep_hydrated_1.litres)(11.8), 5);
        chai_1.assert.equal((0, a_8kyu_keep_hydrated_1.litres)(1787), 893);
        chai_1.assert.equal((0, a_8kyu_keep_hydrated_1.litres)(0), 0);
    });
});
//# sourceMappingURL=a_8kyu_keep_hydrated.spec.js.map