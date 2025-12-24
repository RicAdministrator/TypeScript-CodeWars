"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const i_codility_angry_frogs_1 = require("../src/i_codility_angry_frogs");
describe("Test i_codility_angry_frogs", () => {
    it("test", () => {
        chai_1.assert.equal((0, i_codility_angry_frogs_1.solution)([2, 6, 8, 5]), 3);
        chai_1.assert.equal((0, i_codility_angry_frogs_1.solution)([1, 5, 5, 2, 6]), 4);
        chai_1.assert.equal((0, i_codility_angry_frogs_1.solution)([1, 1]), 2);
        chai_1.assert.equal((0, i_codility_angry_frogs_1.solution)([1]), 1);
        chai_1.assert.equal((0, i_codility_angry_frogs_1.solution)([10]), 1);
    });
});
//# sourceMappingURL=i_codility_angry_frogs.spec.js.map