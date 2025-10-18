"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const i_codility_smallest_positive_integer_1 = require("../src/i_codility_smallest_positive_integer");
describe("Test i_codility_smallest_positive_integer", () => {
    it("test", () => {
        chai_1.assert.equal((0, i_codility_smallest_positive_integer_1.solution)([1, 3, 6, 4, 1, 2]), 5);
        chai_1.assert.equal((0, i_codility_smallest_positive_integer_1.solution)([1, 2, 3]), 4);
        chai_1.assert.equal((0, i_codility_smallest_positive_integer_1.solution)([-1, -3]), 1);
    });
});
//# sourceMappingURL=i_codility_smallest_positive_integer.spec.js.map