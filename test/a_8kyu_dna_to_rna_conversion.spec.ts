import { DNAtoRNA } from '../src/a_8kyu_dna_to_rna_conversion';
import { assert } from "chai";

describe("Test a_8kyu_dna_to_rna_conversion", function () {
    it("Should return a string", function () {
        assert.equal(DNAtoRNA("TTTT"), "UUUU");
        assert.equal(DNAtoRNA("GCAT"), "GCAU");
        assert.equal(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
    });
});