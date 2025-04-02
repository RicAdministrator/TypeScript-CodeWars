"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_well_of_ideas_easy_version_1 = require("../src/a_8kyu_well_of_ideas_easy_version");
describe("Test a_8kyu_well_of_ideas_easy_version", () => {
    it("Fixed tests", () => {
        chai_1.assert.strictEqual((0, a_8kyu_well_of_ideas_easy_version_1.well)(['bad', 'bad', 'bad']), 'Fail!');
        chai_1.assert.strictEqual((0, a_8kyu_well_of_ideas_easy_version_1.well)(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
        chai_1.assert.strictEqual((0, a_8kyu_well_of_ideas_easy_version_1.well)(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
    });
});
//# sourceMappingURL=a_8kyu_well_of_ideas_easy_version.spec.js.map