import solution = require('../src/a_8kyu_dna_to_rna_conversion');
import { assert } from "chai";

describe("Test a_8kyu_dna_to_rna_conversion", function () {
    it("Should return a string", function () {
        assert.equal(solution.DNAtoRNA("TTTT"), "UUUU");
        assert.equal(solution.DNAtoRNA("GCAT"), "GCAU");
        assert.equal(solution.DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
    });
});