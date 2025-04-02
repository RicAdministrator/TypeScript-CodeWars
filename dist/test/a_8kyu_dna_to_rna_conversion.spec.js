"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution = require("../src/a_8kyu_dna_to_rna_conversion");
const chai_1 = require("chai");
describe("Test a_8kyu_dna_to_rna_conversion", function () {
    it("Should return a string", function () {
        chai_1.assert.equal(solution.DNAtoRNA("TTTT"), "UUUU");
        chai_1.assert.equal(solution.DNAtoRNA("GCAT"), "GCAU");
        chai_1.assert.equal(solution.DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
    });
});
//# sourceMappingURL=a_8kyu_dna_to_rna_conversion.spec.js.map